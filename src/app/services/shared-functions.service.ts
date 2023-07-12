import { Injectable } from "@angular/core";
import { FormGroup, ValidationErrors } from "@angular/forms";
import { Md5 } from "ts-md5";
import { Router } from "@angular/router";

export enum ItemType {
  movie = 1,
  serie = 2,
  livestreaming = 3,
  partner = 4,
  shows = 5,
  episode = 6,
  program = 8,
  music = 10,
  album = 11,
  artist = 12,
  playlist = 13,
  musicplatfrom = 20,
  userplaylist = 21,
  partners = 44,
  concerts = 23,
  comingsoon = 48,
}

export enum LiveStreamingTypes {
  livestreamingVideo = 6,
  livestreamingAudio = 7,
  livestreamingMusicClip = 9,
}

@Injectable({
  providedIn: "root",
})
export class SharedFunctionsService {
  static EMAIL_PATTERN = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9-]+.[A-Za-z]{2,64}";
  static ARABIC_PHONE_REGEX = new RegExp("[۰١٢٣٤٥٦٧٨٩]");
  static ENGLISH_PHONE_REGEX = new RegExp("^[0-9+ ]+$");

  constructor(
    private _router: Router,
  ) {
   
  }


  /**
   * Returns which browser is being used
   */
  getBrowser(): string {
    const ua = navigator.userAgent;
    let tem,
      M =
        ua.match(
          /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
        ) || [];
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return "IE " + (tem[1] || "");
    }
    if (M[1] === "Chrome") {
      tem = ua.match(/\b(OPR|Edge|Edg)\/(\d+)/);
      if (tem !== null) {
        return tem.slice(1).join(" ").replace("OPR", "Opera");
      }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
    if ((tem = ua.match(/version\/(\d+)/i)) !== null) {
      M.splice(1, 1, tem[1]);
    }
    return M.join(" ");
  }

  /**
   * Hashes the given text using md5 hashing
   * @param text Text to hash
   */
  md5(text: string) {
    return Md5.hashStr(text).toString();
  }

  
}

export const CREATED_DATE = `shakaPlayer${(+new Date()).toString(16)}`;
