import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { InvalidBorderDirective } from '../../../../core/directives/invalid-form-field.directive';

@Component({
  imports: [ReactiveFormsModule, InvalidBorderDirective],
  selector: 'app-login-form',
  styleUrl: './login-form.css',
  templateUrl: './login-form.html',
})
export class LoginForm {
  readonly submitted = output<{ username: string; password: string; rememberMe: boolean }>();

  readonly form = new FormGroup({
    inputCompanyID: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4), Validators.maxLength(30)],
    }),

    inputPassword: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    }),
    rememberMe: new FormControl(false, { nonNullable: true }),
  });

  signIn() {
    if (this.form.invalid) {
      console.log('Error en el formulario', this.form.invalid, this.form.touched)
      this.form.markAllAsTouched();
      return;
    }
    const { inputCompanyID, inputPassword, rememberMe } = this.form.getRawValue();
    this.submitted.emit({
      username: inputCompanyID.trim(),
      password: inputPassword,
      rememberMe: rememberMe,
    });
  }
}
