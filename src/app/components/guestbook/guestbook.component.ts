import { Observable } from 'rxjs';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestService, Comment } from 'app/shared';

@Component({
  selector: 'guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent implements OnInit {
  comments: any;
  commentForm: FormGroup;
  newComment: any;

  constructor(
    private reqService: RequestService,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.fetchComments();
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  fetchComments() {
    return this.reqService.getComments()
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
    this.commentForm = this.fb.group({ comment: '' });
  }

  rebuildForm() {
    this.commentForm.reset({ comment: '' });
  }

  formateDate(dateString) {
    return new Date(dateString).toUTCString().slice(0, 16);
  }

  prepareComment() {
    const newComment = this.commentForm.value;

    if (newComment.comment.length > 0 && this.commentForm.status === 'VALID') {
      return this.commentForm.value;
    } else {
      return false;
    }
  }

  onSubmit() {
    this.newComment = this.prepareComment();

    if (this.newComment === false) {
      return this.rebuildForm()
    } else {
      this.reqService
        .addComment(this.newComment.comment)
        .subscribe(res => this.comments = this.fetchComments());
    }
  }
}