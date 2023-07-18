import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { AuthGuard } from './guards/auth.guard';
import { LandingPageAuthGuard } from './guards/landing.guard';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full',
    data: {
      hideHeader: false,
      hideFooter: false,
      contentId: 1,
    },
    canActivate:[LandingPageAuthGuard]
    
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      hideHeader: false,
      hideFooter: false,
      contentId: 1,
    },
    canActivate: [AuthGuard],

  },
  {
    path: 'profiles',
    component: ProfilesComponent,
    pathMatch: 'full',
    data: {
      hideHeader: false,
      hideFooter: false,
      contentId: 1,
    },
    canActivate: [AuthGuard],

  },
];
