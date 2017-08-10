import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  photos = [];

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.photos = this.stateService.photos;
  }

}







