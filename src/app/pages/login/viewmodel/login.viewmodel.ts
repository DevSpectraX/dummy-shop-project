import { inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUseCase } from '../../../domain/usecases/login.usecase';
import { SaveSessionUseCase } from '../../../domain/usecases/save-session.usecase';
import { ValidateSessionUseCase } from '../../../domain/usecases/validate-session.usecase';
import { LoginState } from './login.state';

@Injectable()
export class LoginViewModel{
  public readonly loginState = inject(LoginState);
  private readonly loginUseCase = inject(LoginUseCase);
  private readonly validateSessionUseCase = inject(ValidateSessionUseCase);
  private readonly saveSessionUseCase = inject(SaveSessionUseCase);
  private readonly router = inject(Router);

  init(): void {
    this.loginState.isLoading.set(false);
    this.loginState.error.set(null);
  }

  submit(data: { username: string; password: string; rememberMe: boolean }): void {
    this.loginState.isLoading.set(true);
    this.loginState.error.set(null);

    this.loginUseCase
      .execute({
        username: data.username,
        password: data.password,
      })
      .subscribe({
        next: (session) => {
          this.loginState.session.set(session);

          /*   console.log('Enviado -> ', data.username, data.password);
          console.log('RememberMe -> ', data.rememberMe);
          console.log('Recibido -> ', session);
          console.log('token:', session.accessToken); */

          if (data.rememberMe) {
            console.log('Guardando token en local');
            this.saveSessionUseCase.execute(session).subscribe();
          }
          this.router.navigate(['/home']);
        },

        error: (err) => {
          this.loginState.error.set(err.message);
          this.loginState.isLoading.set(false);
        },
      });
  }
}
