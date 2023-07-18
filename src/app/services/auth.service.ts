import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { encryptor } from './encryptor';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {SsrCookieService} from 'ngx-cookie-service-ssr';


@Injectable({
  providedIn: 'root',
})
export class DataAuthService {
  apiUrl: string = environment.API_URL_SVOD;
  TK: string | null = '';
  bearer: string | null = '';
  loggedIn: boolean = false;
  userInfo: any;
  authInfo: any;
  platformId: Object;
  isLoggedin$ = new BehaviorSubject<any>(undefined);

  constructor(
    private http: HttpClient,
    private _ssrCookieService:SsrCookieService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.platformId = platformId;
  }
  isLoggedIn() {
    return this.loggedIn;
  }
  refreshToken() {
    return this.authenticate();
  }

  clearData(notTrusted?: boolean) {
    if (notTrusted) {
      this.bearer = null;
    }
    this.TK = null;
  }
  /**
   * Application Authentication
   */
  authenticate() {
    const encData = encryptor.encryptData(
      JSON.stringify({
        CID: 'ttwebclient',
        CS: 'dS%aYY2C7rDb=!39',
        AN: 'TentimeApiScope',
      }),
      environment.ENC_DEC_KEY
    );
    // let api = isPlatformServer(this.platformId) ? "https://testing.mifteam.com/securedapp/api":this.apiUrl
    console.log(
      'isPlatformServer(this.platformId) :>> ',
      isPlatformBrowser(this.platformId)
    );
    return this.http
      .post(
        // isPlatformBrowser(this.platformId)
        //   ? this.apiUrl + 'Id/Authorize'
        //   : 
          'https://testing.mifteam.com/securedapp/api/Id/Authorize',
        encData,
        { responseType: 'text' }
      )
      .pipe(
        map((data: string) => {
          this.authInfo = JSON.parse(
            encryptor.decryptData(data, environment.ENC_DEC_KEY)
          );
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(
              'Authorization',
              'Bearer ' + this.authInfo.bearer
            );
          }

          
          this.bearer = 'Bearer ' + this.authInfo.bearer;
          this._ssrCookieService.set('Authorization',encodeURIComponent(this.bearer))      
          return this.authInfo;
        }),
        catchError((error: Error) => {
          return throwError(() => error);
        })
      );
  }

  /**
   * Log in API
   * @param loginRequest Login request body
   */
  login(body: LoginRequest) {
    const headers = new HttpHeaders({
      Authorization: this.bearer,
    });
    // let api = isPlatformServer(this.platformId) ? "https://testing.mifteam.com/securedapp/api":this.apiUrl

    return this.http
      .post(
        // isPlatformBrowser(this.platformId)
        //   ? this.apiUrl + 'Auth/login'
        //   :
           'https://testing.mifteam.com/securedapp/api/Auth/login',
        encryptor.encryptData(JSON.stringify(body), environment.ENC_DEC_KEY),
        { headers, responseType: 'text' }
      )
      .pipe(
        map((data: string) => {
          this.userInfo = JSON.parse(
            encryptor.decryptData(data, environment.ENC_DEC_KEY)
          );
          this.TK = this.userInfo.tk;
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('TK', this.TK);
            localStorage.setItem('userInfo', data);
          }
          this.loggedIn = true;
          this.isLoggedin$.next(this.userInfo);
          this._ssrCookieService.set('tk',this.TK)
          this._ssrCookieService.set("userInfo",data)
          return this.userInfo;
        }),
        catchError((error: Error) => {
          return throwError(() => error);
        })
      );
  }

  userData() {
    const headers = new HttpHeaders({
      Authorization: this.bearer,
      Tk: this.TK,
    });
    return this.http
      .post<any>(
        this.apiUrl + 'Users/IsLoggedIn',
        {
          isEarthLink: true,
          isScopeSky: true,
          isHalaSat: true,
        },
        { headers }
      )
      .pipe(
        map((data: any) => {
          console.log('any :>> ', data);
          this.isLoggedin$.next(data);
          return data;
        }),
        catchError((error: Error) => {
          return throwError(() => error);
        })
      );
  }
}
