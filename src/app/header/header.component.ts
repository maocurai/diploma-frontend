import { Component } from '@angular/core';
import {LogoutComponent} from "../logout/logout.component";
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";
import { NgIf } from '@angular/common';
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LogoutComponent,
    NgIf,
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public hardcodedauthenticationSevise: HardcodedAuthenticationService,
              private translate: TranslateService) {
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    // localStorage.setItem('selectedLanguage', language);
  }

}
