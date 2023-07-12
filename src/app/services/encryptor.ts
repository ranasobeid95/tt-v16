// declare var forge: any;
import * as forge from 'node-forge';

export let encryptor = {
  generateRandomHex: function(byteLength: number) {
    const stringLength = byteLength * 2;

    const alphabet = 'abcdef0123456789';
    let s = '';

    for (let i = 0; i < stringLength; i++) {
      const r = Math.floor(Math.random() * alphabet.length);

      s += alphabet[r];
    }

    // prevent null block.
    s = s.replace(new RegExp('00', 'g'), '11');

    return s;
  },

  _dataFromHexString: function(hexString: string ) {
    hexString = hexString.trim();
    hexString = hexString.replace(new RegExp(' ', 'g'), '');
    hexString = hexString.toLowerCase();

    let i;
    for (i = 0; i < hexString.length; i++) {
      if ('abcdef0123456789'.indexOf(hexString[i]) === -1) {
        throw new Error('Invalid encryption hex data');
      }
    }

    return forge.util.hexToBytes(hexString);
  },

  _dataToHexString: function(bytes: any) {
    return forge.util.bytesToHex(bytes);
  },

  _checkKey: function(hexKey: string ) {
    hexKey = hexKey.trim();
    hexKey = hexKey.replace(new RegExp(' ', 'g'), '');
    hexKey = hexKey.toLowerCase();

    if (hexKey.length !== 64) {
      throw new Error('key length is not 256 bit (64 hex characters)');
    }

    let i;
    for (i = 0; i < hexKey.length; i += 2) {
      if (hexKey[i] === '0' && hexKey[i + 1] === '0') {
        throw new Error('key cannot contain zero byte block');
      }
    }
  },

  encryptData: function(plainText: any, hexKey: string) {
    this._checkKey(hexKey);

    const hexIV = this.generateRandomHex(16);
    const hexString = this._dataToHexString(forge.util.encodeUtf8(plainText));

    const cipherHexStr = this._encryptData(hexString, hexKey, hexIV);

    const hmacHexKey = this.generateRandomHex(16);
    const hmacHexStr = this._computeHMAC(hexIV, cipherHexStr, hexKey, hmacHexKey);

    return hexIV + hmacHexKey + hmacHexStr + cipherHexStr;
  },

  decryptData: function(hexStr: string, hexKey: string) {
    this._checkKey(hexKey);
    let plainText = null;

    if (hexStr.length > 128) {
      const hexIV = hexStr.substr(0, 32);
      const hmacHexKey = hexStr.substr(32, 32);
      const hmacHexStr = hexStr.substr(64, 64);
      const cipherHexStr = hexStr.substr(128);

      const computedHmacHexStr = this._computeHMAC(
        hexIV,
        cipherHexStr,
        hexKey,
        hmacHexKey
      );

      if (computedHmacHexStr.toLowerCase() === hmacHexStr.toLowerCase()) {
        const decryptedStr = this._decryptData(cipherHexStr, hexKey, hexIV);
        plainText = forge.util.decodeUtf8(forge.util.hexToBytes(decryptedStr));
      }
    }

    return plainText;
  },

  _computeHMAC: function(hexIV: any, cipherHexStr: any, hexKey: string, hmacHexKey: string) {
    hexKey = hexKey.trim();
    hexKey = hexKey.replace(new RegExp(' ', 'g'), '');
    hexKey = hexKey.toLowerCase();

    hmacHexKey = hmacHexKey.toLowerCase();

    let hexString = hexIV + cipherHexStr + hexKey;
    hexString = hexString.toLowerCase();

    const hmac = forge.hmac.create();
    hmac.start('sha256', hmacHexKey);
    hmac.update(hexString);

    return hmac.digest().toHex();
  },

  _encryptData: function(hexString: string, hexKey: string, hexIV: string) {
    const data = this._dataFromHexString(hexString);
    const key = this._dataFromHexString(hexKey);
    const iv = this._dataFromHexString(hexIV);

    // Note: CBC mode use PKCS#7 padding as default
    const cipher = forge.cipher.createCipher('AES-CBC', key);
    cipher.start({ iv: iv });
    cipher.update(forge.util.createBuffer(data));
    cipher.finish();

    return cipher.output.toHex();
  },

  _decryptData: function(hexString: string, hexKey: string, hexIV: string) {
    const data = this._dataFromHexString(hexString);
    const key = this._dataFromHexString(hexKey);
    const iv = this._dataFromHexString(hexIV);

    // Note: CBC mode use PKCS#7 padding as default
    const decipher = forge.cipher.createDecipher('AES-CBC', key);
    decipher.start({ iv: iv });
    decipher.update(forge.util.createBuffer(data));
    const result = decipher.finish(); // check 'result' for true/false

    return decipher.output.toHex();
  }
};
