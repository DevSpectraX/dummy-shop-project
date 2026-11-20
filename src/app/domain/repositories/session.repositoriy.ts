import { Observable } from 'rxjs';
import { UserSessionEntity } from '../entities/user-session.entity';

export abstract class SessionRepository {
  abstract get(): Observable<UserSessionEntity | null>;
  abstract save(session: UserSessionEntity): Observable<void>;
  abstract clear(): Observable<void>;
}
