import { Component, OnInit } from '@angular/core';
import { RequestService } from 'app/shared';

@Component({
  selector: 'guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent implements OnInit {
  constructor(private reqService: RequestService) {}

  ngOnInit() {
    console.log(this.reqService);
  }
}
