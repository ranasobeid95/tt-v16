import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { DataAuthService } from '../services/auth.service';
import { encryptor } from '../services/encryptor';
import { environment } from 'src/environments/environment';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root',
})
export class LandingPageAuthGuard {
  platformId: Object;
  constructor(
    public authService: DataAuthService,
    public router: Router,
    private _ssrCookieService: SsrCookieService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.platformId = platformId;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userInfoCookie = this._ssrCookieService.get('userInfo');
    if (userInfoCookie) {
      const encryptedUserInfo = encryptor.decryptData(
        userInfoCookie,
        environment.ENC_DEC_KEY
      );
      const parsedUserInfo = JSON.parse(encryptedUserInfo);
      const tkCookie = this._ssrCookieService.get('tk');
      if (userInfoCookie && parsedUserInfo.tk === tkCookie) {
        this.router.navigate(['/home']);
        return false;
      }
    }

    return true;
  }
}
