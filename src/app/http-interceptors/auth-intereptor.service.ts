import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  HttpRequest,
  HttpInterceptor,
  HttpHandler,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { DataAuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { LoggingService } from '../services/logging.service';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor {

  refreshTokenInProgress = false;
  tokenRefreshedSource = new Subject();
  tokenRefreshed$ = this.tokenRefreshedSource.asObservable();

  private authHeader!: string|null;
  private tkHeader!: string| null;
  private earthLink = 'https://tvapi.shabakaty.com/health/';

  constructor(
    private _authService: DataAuthService,
    private _router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  addAuthHeader(request: HttpRequest<any>) {

    if (!this._authService.TK && isPlatformBrowser(this.platformId)) {
      this._authService.TK = localStorage.getItem("TK");
      console.log('TK :>> ' ,this._authService.TK );
    }

    if (!this._authService.bearer && isPlatformBrowser(this.platformId)) {
      this._authService.bearer = localStorage.getItem(
        'Authorization'
      );
      console.log('bearer :>> ' ,this._authService.bearer );
    }
    this.tkHeader = this._authService.TK;
    this.authHeader = this._authService.bearer;

    if (request.url === this.earthLink) {
      return request.clone({
        setHeaders: {
        rejectUnauthorized: 'false'
        }
      });
    }

    if (this.authHeader && this.tkHeader) {
      return request.clone({
        setHeaders: {
          Authorization: this.authHeader,
          TK: this.tkHeader
        }
      });
    }

    if (this.tkHeader) {
      return request.clone({
        setHeaders: {
          TK: this.tkHeader
        }
      });
    }

    if (this.authHeader) {
      return request.clone({
        setHeaders: {
          Authorization: this.authHeader
        }
      });
    }
    return request;
  }

  refreshToken() {
    if (this.refreshTokenInProgress) {
      return new Observable(observer => {
        this.tokenRefreshed$.subscribe(() => {
          observer.next();
          observer.complete();
        });
      });
    } else {
      this.refreshTokenInProgress = true;
      return this._authService.refreshToken().pipe(
        tap(() => {
          this.refreshTokenInProgress = false;
          this.tokenRefreshedSource.next(void 0);
        })
      );
    }
  }

  clearData() {
    return this._authService.clearData();
  }

  denyAuth(error: HttpErrorResponse) {
    if (error.status === 406 || error.status === 407 || error.status === 410) {
      this.clearData();
      this._router.navigate(['']);
      return throwError(() => error);
    } else if (error.status === 500) {
      return throwError(() => error);
    } else {
      return throwError(() => error);
    }
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // Handle request
    if (request.url !== LoggingService.SLACK_WEB_HOOK) {
      request = this.addAuthHeader(request);
    } else {
      request = request.clone({
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        )
      });
    }
    // First Load of the website
    if (
      !request.headers.get('Authorization') &&
      request.body &&
      !request.body['CID'] &&
      request.url.indexOf('api') > -1 &&
      request.body.previewToken == null &&
      !environment.dev
    ) {
      return this.refreshToken().pipe(
        switchMap(() => {
          request = this.addAuthHeader(request);
          return next.handle(request);
        })
      );
    }
    // Handle response
    return next.handle(request).pipe(
      catchError(error => {
        if (error.status === 401) {
          return this.refreshToken().pipe(
            switchMap(() => {
              request = this.addAuthHeader(request);
              return next.handle(request)
                .pipe(
                  catchError(subErr => this.denyAuth(subErr))
                );
            }),
            catchError(() => next.handle(request))
          );
        } else {
          return this.denyAuth(error);
        }
      })
    );
  }
}
