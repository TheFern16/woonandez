import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { RequestService, Comment } from 'app/shared';

@Component({
  selector: 'guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent implements OnInit {
  private comments: Array<Comment>;
  commentForm = FormGroup;

  constructor(private reqService: RequestService, private fb: FormBuilder) {}

  ngOnInit() {
    this.reqService.getComments()
      .subscribe((res) => {
        if (Array.isArray(res)) {
          this.comments = res.map(comment => {
            if (comment.timestamp) {
              comment.timestamp = this.formateDate(comment.timestamp);
            }
            return comment;
          });
        }
      });
  }

  createForm() {

  }

  formateDate(dateString) {
    return new Date(dateString).toUTCString().slice(0, 16);
  }

  onSubmit() {}
}
