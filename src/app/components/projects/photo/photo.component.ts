import { Component, OnInit, Input } from '@angular/core';
import { photo } from 'app/shared';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input('photo') photo: photo;

  constructor() {}

  ngOnInit() {
  }
}
