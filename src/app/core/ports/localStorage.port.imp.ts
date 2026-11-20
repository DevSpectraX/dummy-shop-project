import { Injectable } from '@angular/core';
import { LocalStoragePort } from './localStorage.port';
import { readJson, removeJson, writeJson } from '../utils/storage.utils';

@Injectable({ providedIn: 'root' })
export class LocalStoragePortImp extends LocalStoragePort {
  override getItem<T>(key: string): T | null {
    return readJson<T | null>(key, null);
  }
  override setItem(key: string, value: unknown): boolean {
    return writeJson(key, value);
  }
  override removeItem(key: string): void {
    return removeJson(key);
  }
}
