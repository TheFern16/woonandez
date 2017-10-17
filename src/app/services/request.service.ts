import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RequestService {
  constructor(private http: HttpClient) {}

  addOxfordComma(text: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('/api/oxfordComma', { text }, { headers });
  }

  upperCaseText(text: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('/api/upperCase', { text }, { headers });
  }

  lowerCaseText(text: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('/api/lowerCase', { text }, { headers });
  }

  camelCaseText(text: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('/api/camelCase', { text }, { headers, responseType: 'text' });
  }

  altCaseText(text: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('/api/altCase', { text }, { headers, responseType: 'text' });
  }

  gatherSkills() {
    return this.http.get('/api/skills');
  }

  gatherFacts() {
    return this.http.get('/api/facts');
  }

}