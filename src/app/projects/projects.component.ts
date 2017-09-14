import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  photos: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/apps')
      .subscribe(data => {
        this.photos = data
      });
  }

}






