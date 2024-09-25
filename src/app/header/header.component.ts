import { Component } from '@angular/core';
import {LogoutComponent} from "../logout/logout.component";
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LogoutComponent,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public hardcodedauthenticationSevise: HardcodedAuthenticationService) {
  }

}
