import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { throwError, of, Observable, from } from "rxjs";
import {
  map,
  catchError,
  switchMap,
  timeout,
  mergeMap,
  filter,
} from "rxjs/operators";
import { environment } from "../../environments/environment";
import { fromFetch } from "rxjs/fetch";
import { isPlatformBrowser } from "@angular/common";
import { encryptor } from "./encryptor";
@Injectable({
  providedIn: "root",
})
export class DataAuthService {
  apiUrl: string = environment.API_URL_SVOD;
  TK: string | null = "";
  bearer: string | null = "";
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }


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
    const encData = encryptor.encryptData(JSON.stringify({
    CID: "ttwebclient",
    CS: "dS%aYY2C7rDb=!39",
    AN: "TentimeApiScope",
  }), environment.ENC_DEC_KEY);
    return this.http.post(this.apiUrl + "Id/Authorize", encData, { responseType: 'text' }).pipe(
      map((data: string) => {
        console.log('Id/Authorize:', data);
        localStorage.setItem("Authorization", "Bearer " + data);
        this.bearer = "Bearer " + data;
        return data;
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
    
    console.log('body :>> ', body);
    const headers = new HttpHeaders({
    'Authorization': this.bearer
  });
  return this.http.post(this.apiUrl + "Auth/login",
    encryptor.encryptData(JSON.stringify(body), environment.ENC_DEC_KEY),
    { headers, responseType: 'text' }
  ).pipe(
    map((data: string) => {
      console.log('data login:', data);
      return data ; 
    }),
    catchError((error: Error) => {
      return throwError(() => error);
    })
  );
  
  }


}