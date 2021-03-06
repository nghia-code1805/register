import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SignupInfo} from '../signup-info';
import {Observable} from 'rxjs';
import {SignInInfo} from '../signin-info';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public isAuthorized = false;
  private siginUrl = '';

  // private changPassword = '';
  constructor(private http: HttpClient) {
  }

  signUp(info: SignInInfo): Observable<string> {
    return this.http.post<string>(this.siginUrl, info, httpOptions);
  }

  // updatePassword(passForm: PassForm)

  signIn(info: SignInInfo): Observable<string> {
    return this.http.post<string>(this.siginUrl, info, httpOptions);
  }
}
