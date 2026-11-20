import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  LOGIN_URL,
  VALIDATE_SESSION_URL,
} from '../../../core/config/constants/auth-dummyjson.constants';
import { AuthRemoteDataSource } from '../source/auth-remote.datasource';
import { UserDTO } from './dto/user.dto';

@Injectable({ providedIn: 'root' })
export class AuthRemoteDataSourceImp extends AuthRemoteDataSource {
  private readonly http = inject(HttpClient);

  override login(username: string, password: string): Observable<UserDTO> {
    return this.http.post<UserDTO>(LOGIN_URL, { username, password, expiresInMins: 1 });
  }
  override validateSession(accessToken: string): Observable<UserDTO> {
    return this.http.get<UserDTO>(`${VALIDATE_SESSION_URL}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }
}
