import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export class RequestService {
  constructor(private http: Http) {}

  addOxfordComma(text: string) {
    const headers = new Headers({ 'Content-Type': 'applicaton/json' });
    return this.http.post('/api/oxfordComma', text, { headers });
  }


}