import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { DataAuthService } from '../services/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { environment } from 'src/environments/environment';
import { encryptor } from '../services/encryptor';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
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
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
