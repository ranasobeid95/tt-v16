import { version } from "../../package.json";

export const environment = {
  app_url: "https://tentime.com",
  production: true,
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
  YOUBORA_ACCOUNT_CODE: "tentime",
  CHROME_CAST_APPID: "2F7B1DC8",
  API_URL_SVOD: "securedapp/api/",
  API_URL_MUSIC: "musicsecuredapp/api/",
  BOB_MERCHANT_ID: "TENTIME3",
  BOB_JS_SRC:
    "https://bobsal.gateway.mastercard.com/checkout/version/52/checkout.js",
  homeUrl: "",
  Google_Tag_Manager_ID: "TX3M9QN",
  ASIA_DOCS_URL: "https://tentime.com/asiahawala.html",
  Hyperpay_Url: "https://oppwa.com/v1/paymentWidgets.js?checkoutId=",
  SITE_KEY: "6LduUu8bAAAAAFzWWFpW9LU1oJ90kqX--SDN6C8p",
  fairplay: {
    server: "/proxy?drmType=fairplay",
    certificate:
      "https://fp-keyos.licensekeyserver.com/cert/12b69848c2bcd4d84df0ce84e63dc108.der",
  },
  widevine: "/proxy?drmType=widevine",
  checkout_public_key: "pk_3fu3ivhwl726qzdfuqibfheway4"
};
