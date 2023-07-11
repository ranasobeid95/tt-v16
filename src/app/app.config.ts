import { TitleStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

// import { CustomTitleStrategy } from './custom-title-strategy';
import { routes } from './routes';
import { provideAnimations } from '@angular/platform-browser/animations';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations()
],
};