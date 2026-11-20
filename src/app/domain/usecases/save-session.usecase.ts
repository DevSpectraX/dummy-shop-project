import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../core/interface/use-case.interface';
import { UserSessionEntity } from '../entities/user-session.entity';
import { SessionRepository } from '../repositories/session.repositoriy';

@Injectable()
export class SaveSessionUseCase implements UseCase<UserSessionEntity, void> {
  private readonly sessionRepository = inject(SessionRepository);

  execute(session: UserSessionEntity): Observable<void> {
    return this.sessionRepository.save(session);
  }
}
