import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../core/interface/use-case.interface';
import { UserSessionEntity } from '../entities/user-session.entity';
import { AuthRepository } from '../repositories/auth.repository';

@Injectable()
export class LoginUseCase implements UseCase<{}, UserSessionEntity> {
  private readonly authRepository = inject(AuthRepository);

  execute(params: { username: string; password: string }): Observable<UserSessionEntity> {
    return this.authRepository.login(params.username.trim(), params.password);
  }
}
