// import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient,withFetch } from '@angular/common/http';
import { AppComponent } from './app.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch())
  ]
}

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()),provideHttpClient()]
// };
