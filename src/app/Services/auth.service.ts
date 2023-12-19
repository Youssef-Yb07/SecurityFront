import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {AuthenticationRequest} from "../Classes/authentication-request";
import {AuthenticationResponse} from "../Classes/authentication-response";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BaseUrl = 'http://localhost:8080/api/v1/auth/authenticate';

  constructor(private httpClient: HttpClient,private router:Router) { }

  login(authRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.httpClient.post<AuthenticationResponse>(this.BaseUrl, authRequest);
  }

  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('idUser');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    let authToken = sessionStorage.getItem('token');
    return authToken !== null ? true : false;
  }

}
