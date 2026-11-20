import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSessionEntity } from '../../domain/entities/user-session.entity';
import { SessionRepository } from '../../domain/repositories/session.repositoriy';
import { SessionLocalDataSource } from '../datasources/source/session-local.datasource';

export class SessionRepositoryImp extends SessionRepository {
  private readonly local = inject(SessionLocalDataSource);

  override get(): Observable<UserSessionEntity | null> {
    return this.local.get();
  }
  override save(session: UserSessionEntity): Observable<void> {
    return this.local.save(session);
  }
  override clear(): Observable<void> {
    return this.local.clear();
  }
}
