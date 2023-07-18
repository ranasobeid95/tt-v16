import {
  mergeApplicationConfig,
  ApplicationConfig,
  importProvidersFrom,
} from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './routes';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    importProvidersFrom(HttpClientModule),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
