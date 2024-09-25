import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  authenticate(username: string, password: string) {
    if(username === 'in28min' && password == 'dummy' ) {
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    if (sessionStorage) {
      let user = sessionStorage.getItem('authenticatedUser')
      return !(user === null)
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }
}
