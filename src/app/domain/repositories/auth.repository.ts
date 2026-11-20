import { Observable } from 'rxjs';
import { UserSessionEntity } from '../entities/user-session.entity';

export abstract class AuthRepository {
  abstract login(username: string, password: string): Observable<UserSessionEntity>;
  
  //pasar a session
  abstract validateSession(): Observable<UserSessionEntity | null>;
}
