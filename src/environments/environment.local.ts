// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { version } from "../../package.json";

export const environment = {
  production: false,
  app_version: version,
  dev: true,
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
  API_URL_SVOD: "api/",
  API_URL_MUSIC: "musicsecuredapp/api/",
  BOB_MERCHANT_ID: "TENTIME1",
  BOB_JS_SRC:
    "https://test-bobsal.gateway.mastercard.com/checkout/version/52/checkout.js",
  homeUrl: "",
  Google_Tag_Manager_ID: "P7K7PXP",
  ASIA_DOCS_URL: "https://testing.mifteam.com/asiahawala.html",
  Hyperpay_Url: "https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=",
  SITE_KEY: "6LduUu8bAAAAAFzWWFpW9LU1oJ90kqX--SDN6C8p",
  fairplay: {
    server: "/proxy?drmType=fairplay",
    certificate:
      "https://fp-keyos.licensekeyserver.com/cert/12b69848c2bcd4d84df0ce84e63dc108.der",
  },
  widevine: "/proxy?drmType=widevine",
  checkout_public_key: "pk_sbox_irhy5fbgr7vbupijjhu3wt4si4$"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
