import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.types';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    return this.httpClient
      .post<LoginResponse>('/api/login', { email, password })
      .pipe(
        tap((value) => {
          sessionStorage.setItem('aut-token', value.token);
          sessionStorage.setItem('username', value.email);
        })
      );
  }
}
