import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {}
  baseUrl: string = 'https://localhost:44347/api/';
  public getBaseUrl(): string {
    return this.baseUrl;
  }
}
