import { Component, OnInit } from '@angular/core';
import { RequestService, Comment } from 'app/shared';

@Component({
  selector: 'guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent implements OnInit {
  private comments: any;

  constructor(private reqService: RequestService) {}

  ngOnInit() {
    this.reqService.getComments()
      .subscribe((res) => {
        this.comments = res.map(comment => {
          if (comment.timestamp) {
            comment.timestamp = this.formateDate(comment.timestamp);
          }
          return comment;
        })
      });
  }

  formateDate(dateString) {
    return new Date(dateString).toUTCString().slice(0, 16);
  }
}
