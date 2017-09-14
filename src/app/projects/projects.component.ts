import { Component, OnInit } from '@angular/core';
// import { StateService } from '../services/state.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  photos: any = [];

  constructor(
    // private stateService: StateService,
    private http: HttpClient) {}

  ngOnInit() {
    // this.photos = this.stateService.photos;
    this.http.get('/api/apps')
      .subscribe(data => {
        this.photos = data
      });
  }

}






