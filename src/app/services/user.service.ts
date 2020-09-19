import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { User } from '../common/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = environment.baseUrl;

  constructor(
    private readonly http: HttpClient,
  ) { }

  getUserById(id: number): Observable<User> {
    const url = `${this.baseUrl}/user/${id}`;

    return this.http.get<User>(
      url,
      { withCredentials: true },
    ).pipe(take(1));
  }

  createUser(user: User): Observable<User> {
    const url = `${this.baseUrl}/user`;

    return this.http.post<User>(
      url,
      user,
      { withCredentials: true },
    ).pipe(take(1));
  }

  updateUser(id: number, user: User): Observable<User> {
    const url = `${this.baseUrl}/user/${id}`;

    return this.http.put<User>(
      url,
      user,
      { withCredentials: true },
    ).pipe(take(1));
  }

  deleteUser(id: number): Observable<User> {
    const url = `${this.baseUrl}/user/${id}`;

    return this.http.delete<User>(
      url,
      { withCredentials: true },
    ).pipe(take(1));
  }
}
