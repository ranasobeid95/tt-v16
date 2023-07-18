import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { DataAuthService } from '../services/auth.service';
import { Observable, of, map } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { encryptor } from '../services/encryptor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LandingPageAuthGuard {
  platformId: Object;
  constructor(
    public authService: DataAuthService,
    public router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.platformId = platformId;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (
      isPlatformBrowser(this.platformId) &&
      JSON.parse(
        encryptor.decryptData(
          localStorage.getItem('userInfo'),
          environment.ENC_DEC_KEY
        )
      ).tk === localStorage.getItem('TK')
    ) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
}
