import { API_URL } from './../app.constants';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })

    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`,
      {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logOut(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }
}

export class AuthenticationBean{
  constructor(public message:string) { }
}