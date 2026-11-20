import { inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateSessionUseCase } from '../../../domain/usecases/validate-session.usecase';
import { HomeState } from './home.state';

@Injectable()
export class HomeViewModel {
  protected readonly homeState = inject(HomeState);
  private readonly router = inject(Router);
  private readonly validateSessionUseCase = inject(ValidateSessionUseCase);

  init(): void {
    this.validateSessionUseCase.execute().subscribe({
      next: (validation) => {
        if (!validation) {
          console.log('Valor de Validacion: ', validation)
          this.router.navigate(['/login']);
        }
      },
    });
  }
}

