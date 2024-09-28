import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from '@angular/forms';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    WelcomeComponent,
    LoginComponent,
    FormsModule,
    FooterComponent,
    HeaderComponent
  ]
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    if (localStorage) {
      let savedLanguage = localStorage.getItem('selectedLanguage');
      let defaultLanguage = savedLanguage ? savedLanguage : 'en';
      this.translate.setDefaultLang(defaultLanguage);
      this.translate.use(defaultLanguage);
    } else {
      let defaultLanguage = 'en';
      this.translate.setDefaultLang(defaultLanguage);
      this.translate.use(defaultLanguage);
    }
  }

}
