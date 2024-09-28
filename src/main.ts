import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {importProvidersFrom} from "@angular/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          deps: [HttpClient],
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
        },
      })
    ),
  ],
}).catch((err) => console.error(err));

