import { TitleStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

// import { CustomTitleStrategy } from './custom-title-strategy';
import { routes } from './routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthInterceptorService } from './http-interceptors/auth-intereptor.service';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    importProvidersFrom(HttpClientModule),
  //   provideHttpClient(
  //     withInterceptorsFromDi(),
  // ),
  // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
],
};