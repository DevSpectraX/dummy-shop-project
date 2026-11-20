import { Observable } from 'rxjs';
import { UserSessionEntity } from '../../../domain/entities/user-session.entity';

export abstract class SessionLocalDataSource {
  abstract get(): Observable<UserSessionEntity | null>;
  abstract save(session: UserSessionEntity): Observable<void>;
  abstract clear(): Observable<void>;
}
