import { Directive, HostBinding, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({ selector: '[appInvalidFormField]' })
export class InvalidBorderDirective {
  //Injectar la dependencia que controla el formulario
  private readonly ngControl = inject(NgControl);

  @HostBinding('class.invalid-field-border')
  get isRed(): boolean {
    return Boolean(this.ngControl.control?.invalid && this.ngControl.control?.touched);
  }
}
