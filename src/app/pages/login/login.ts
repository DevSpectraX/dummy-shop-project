import { Component, inject, OnInit } from '@angular/core';
import { WelcomeCard } from './components/welcome-card/welcome-card';
import { LoginState } from './viewmodel/login.state';
import { LoginViewModel } from './viewmodel/login.viewmodel';

@Component({
  imports: [WelcomeCard],
  providers: [LoginViewModel, LoginState],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements OnInit {
  readonly loginVM = inject(LoginViewModel);
  ngOnInit(): void {
    this.loginVM.init();
  }
}
