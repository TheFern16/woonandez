import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RequestService {
  constructor(private http: HttpClient) {}

  addOxfordComma(text: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('/api/oxfordComma', { text }, { headers });
  }

  encryptText(text: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('/api/encrypt', { text }, { headers });
  }

  decryptText(text: string) {
    const headers = new HttpHeaders.set('Content-Type', 'application/json');
    return this.http.post('/api/decrypt', { text }, { headers });
  }

}