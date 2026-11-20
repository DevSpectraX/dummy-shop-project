import { Observable } from 'rxjs';
import { UserSessionEntity } from '../../../domain/entities/user-session.entity';
import { UserDTO } from '../remote/dto/user.dto';

export abstract class AuthRemoteDataSource {
  abstract login(username: string, password: string): Observable<UserDTO>;
  abstract validateSession(accessToken: string): Observable<UserDTO>;
}
