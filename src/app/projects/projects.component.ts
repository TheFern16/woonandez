import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  photos = [
    {
      thumbnail:'https://preview.ibb.co/mDJHxF/Screen_Shot_2017_08_10_at_10_07_53_AM.png',
      full: 'https://ibb.co/dbLmra'
    },
    {
      thumbnail: 'https://preview.ibb.co/nQg9Ba/Screen_Shot_2017_08_10_at_10_08_06_AM.png',
      full: 'https://ibb.co/mjOd4v'
    },
    {
      thumbnail: 'https://preview.ibb.co/cwDpBa/Screen_Shot_2017_08_10_at_10_08_18_AM.png',
      full: 'https://ibb.co/hLHGra'
    },
    {
      thumbnail: 'https://preview.ibb.co/eAnhWa/Screen_Shot_2017_08_10_at_10_08_40_AM.png',
      full: 'https://ibb.co/dcB9Ba'
    },
    {
      thumbnail: 'https://preview.ibb.co/ghzwra/its_Cut_Time_thumb.png',
      full: 'https://ibb.co/idiNWa'
    },
    {
      thumbnail: 'https://preview.ibb.co/mW4qHF/its_Cut_Time1.png',
      full: 'https://ibb.co/ckeeBa'
    }];

  constructor() {}

  ngOnInit() {
  }

}







