import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestService, Comment } from 'app/shared';

@Component({
  selector: 'guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent implements OnInit {
  private comments: Array<Comment>;
  private commentForm: FormGroup;
  private newComment: any;

  constructor(private reqService: RequestService, private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();

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
    this.commentForm = this.fb.group({
      post: ''
    });
  }

  formateDate(dateString) {
    return new Date(dateString).toUTCString().slice(0, 16);
  }

  prepareComment() {
    const newComment = this.commentForm.value;
    console.log(newComment);
  }

  onSubmit() {
    this.newComment = this.prepareComment();
  }
}