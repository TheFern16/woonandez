import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from 'app/shared';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  photos: Array<Photo> = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/apps')
      .subscribe(data => {
        if (Array.isArray(data)) {
          this.photos = data;
        }
      });
  }
}






