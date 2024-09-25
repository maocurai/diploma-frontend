import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {
  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (sessionStorage) {
      const basicAuthHeaderString = this.basicAuthenticationService.getAutheticatedToken();
      const username = this.basicAuthenticationService.getAutheticatedUser();
      if (basicAuthHeaderString && username) {
        req = req.clone({
          setHeaders: {
            Authorization: basicAuthHeaderString
          }
        });
      }
    }
    return next.handle(req);
  }
}
