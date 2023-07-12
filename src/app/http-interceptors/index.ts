import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AuthInterceptorService } from './auth-intereptor.service';


export const httpInterceptorProviders = [

  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },

];
