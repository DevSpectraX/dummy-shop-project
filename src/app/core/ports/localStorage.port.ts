export abstract class LocalStoragePort {
  abstract getItem<T>(key: string): T | null;
  abstract setItem(key: string, value: unknown): boolean;
  abstract removeItem(key: string): void;
}
