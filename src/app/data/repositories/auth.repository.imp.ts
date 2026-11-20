import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, switchMap, throwError } from 'rxjs';
import { UserSessionEntity } from '../../domain/entities/user-session.entity';
import { AuthRepository } from '../../domain/repositories/auth.repository';
import { AuthRemoteDataSource } from '../datasources/source/auth-remote.datasource';
import { SessionLocalDataSource } from '../datasources/source/session-local.datasource';
import { UserDtoToEntity } from './auth/mappers/user-dto-to-entity.mapper';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Injectable()
export class AuthRepositoryImp extends AuthRepository {
  private readonly remote = inject(AuthRemoteDataSource);
  private readonly local = inject(SessionLocalDataSource);
  private readonly UserDtoToEntityMapper = inject(UserDtoToEntity);
  override login(username: string, password: string): Observable<UserSessionEntity> {
    return this.remote
      .login(username, password)
      .pipe(map((dto) => this.UserDtoToEntityMapper.mapFrom(dto)));
  }
  override validateSession(): Observable<UserSessionEntity | null> {
    return this.local.get().pipe(
      switchMap((session) => {
        if (!session) {
          return of(null);
        }

        return this.remote.validateSession(session.accessToken).pipe(
          map((dto) => this.UserDtoToEntityMapper.mapFrom(dto)),
          catchError((err: HttpErrorResponse) => {
            if (err.status === 401) {
              console.log(err.name, err.message)
              return of(null);
            }
            console.error(err.message);
            return throwError(() => err);
          }),
        );
      }),
    );
  }
}
