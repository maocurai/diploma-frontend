import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../app.constants';


@Injectable({
  providedIn: 'root',
})

export class WelcomeDataService {
  constructor(private http : HttpClient) { }
  executeHelloWorldServiceWithPathVariable(name : string) {
    return this.http.get<any>(`${API_URL}/welcome/${name}`);
  }
}
