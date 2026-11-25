import { Component, output } from '@angular/core';
import { Login } from '../../login';
import { LoginForm } from '../login-form/login-form';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [LoginForm, TranslatePipe],
  selector: 'app-welcome-card',
  styleUrl: './welcome-card.css',
  templateUrl: './welcome-card.html',
})
export class WelcomeCard {
  readonly submitted = output<{username: string; password: string; rememberMe: boolean}>();
}
