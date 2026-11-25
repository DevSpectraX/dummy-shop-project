import { Component, inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
  private readonly translate = inject(TranslateService);

  ngOnInit(): void {
    this.loginVM.init();
  }
  changeLanguage() {
    const language = this.translate.getCurrentLang();

    this.translate.use(language === 'es' ? 'en' : 'es');

    //Por si necesito traducción a nivel de codigo
    const text = this.translate.instant('login.title', { name: 'William' });
    console.log(text);
  }
}
