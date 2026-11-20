import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USER_SESSION_KEY } from '../../../core/config/constants/auth-dummyjson.constants';
import { LocalStoragePort } from '../../../core/ports/localStorage.port';
import { UserSessionEntity } from '../../../domain/entities/user-session.entity';
import { SessionLocalDataSource } from '../source/session-local.datasource';
import { UserDBO } from './dbo/user.dbo';

export class SessionLocalDataSourceImp extends SessionLocalDataSource {
  private readonly storage = inject(LocalStoragePort);

  override get(): Observable<UserDBO | null> {
    const session = this.storage.getItem<UserDBO>(USER_SESSION_KEY);
    return of(session?.accessToken ? session : null);
  }
  override save(session: UserDBO): Observable<void> {
    this.storage.setItem(USER_SESSION_KEY, session);
    return of(undefined);
  }
  override clear(): Observable<void> {
    this.storage.removeItem(USER_SESSION_KEY);
    return of(undefined);
  }
}
