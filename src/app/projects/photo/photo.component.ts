import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input('photo') photo: { thumbnail: string, full: string };

  constructor() {
    console.log(this.photo)
  }

  ngOnInit() {
  }

}
