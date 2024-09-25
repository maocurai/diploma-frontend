import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  isUserLoggedIn() {
    if (sessionStorage) {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
    } else {
      return false;
    }
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }

  getAutheticatedUser() {
    return sessionStorage.getItem('authenticatedUser')
  }

  getAutheticatedToken() {
    if (this.getAutheticatedUser()) {
      return sessionStorage.getItem('token')
    } else {
      return ''
    }
  }

  executeAuthenticationJWTSerice(username: string, password: string) {
    return this.http.post<any>(`${API_URL}/authenticate`, {
      username,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username)
          sessionStorage.setItem('token', `Bearer ${data.token}`)
          return data;
        }
      )
    );
  }

  createBadicAuthenticationHttpHeader(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ':' + password)
  }
}

export class JwtTokenResponse {
  [x: string]: any;

  constructor(public token: string) {

  }
}
