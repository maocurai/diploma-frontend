import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpIntercepterBasicAuthService} from './service/http/http-intercepter-basic-auth.service';


export const appConfig: ApplicationConfig = {


  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    // importProvidersFrom(
    //   TranslateModule.forRoot({
    //     loader: {
    //       provide: TranslateLoader,
    //       useFactory: HttpLoaderFactory,
    //       deps: [HttpClient],
    //     },
    //   })
    // ),
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercepterBasicAuthService,
      multi: true
    }
  ]
};
