import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  images = ['https://ibb.co/dbLmra', 'https://ibb.co/mjOd4v', 'https://ibb.co/hLHGra', 'https://ibb.co/dcB9Ba'];

  constructor() { }

  ngOnInit() {
  }

}
