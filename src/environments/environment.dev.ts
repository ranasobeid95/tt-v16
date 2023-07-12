import { version } from "../../package.json";

export const environment = {
  app_url: "https://dev.mifteam.com",
  production: false,
  app_version: version,
  dev: false,
  qa: false,
  authData: {
    CID: "ttwebclient",
    CS: "dS%aYY2C7rDb=!39",
    AN: "TentimeApiScope",
  },
  ENC_DEC_KEY:
    "44 52 d7 16 87 b6 bc 2c 93 89 c3 34 9f dc 17 fb 3d fb ba 62 24 af fb 76 76 e1 33 79 26 cd d6 02",
  YOUBORA_ACCOUNT_CODE: "tentimedev",
  CHROME_CAST_APPID: "2F7B1DC8",
  API_URL_SVOD: "securedapp/api/",
  API_URL_MUSIC: "musicsecuredapp/api/",
  BOB_MERCHANT_ID: "TENTIME3",
  BOB_JS_SRC:
    "https://test-bobsal.gateway.mastercard.com/checkout/version/52/checkout.js",
  homeUrl: "",
  Google_Tag_Manager_ID: "P7K7PXP",
  ASIA_DOCS_URL: "https://testing.mifteam.com/asiahawala.html",
  SITE_KEY: "6LduUu8bAAAAAFzWWFpW9LU1oJ90kqX--SDN6C8p",
  Hyperpay_Url: "https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=",
  fairplay: {
    server: "/proxy?drmType=fairplay",
    certificate:
      "https://fp-keyos.licensekeyserver.com/cert/12b69848c2bcd4d84df0ce84e63dc108.der",
  },
  widevine: "/proxy?drmType=widevine",
  checkout_public_key: "pk_sbox_irhy5fbgr7vbupijjhu3wt4si4$"
};
