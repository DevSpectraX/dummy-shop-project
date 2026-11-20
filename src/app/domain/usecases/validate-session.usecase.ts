import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../core/interface/use-case.interface';
import { UserSessionEntity } from '../entities/user-session.entity';
import { AuthRepository } from '../repositories/auth.repository';


@Injectable()
export class ValidateSessionUseCase implements UseCase<string, UserSessionEntity | null> {
  private readonly authRepository = inject(AuthRepository);

  execute(): Observable<UserSessionEntity | null> {
    return this.authRepository.validateSession();
  }
}
