import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RequestService {
  constructor(private http: HttpClient) {}

  addOxfordComma(text: string) {
    return this.http.post('/api/oxfordComma', text);
  }


}