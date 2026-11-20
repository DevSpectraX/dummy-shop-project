import { Injectable, signal } from '@angular/core';

@Injectable()
export class HomeState {
  public readonly hasToken = signal(false);
}
