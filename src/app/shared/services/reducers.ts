import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RequestService } from './request.service';

export function commentReducer(comments: any = [], action: any) {
  switch (action.type) {
    case ('GET_INITIAL_STATE'):
      return comments;
    case ('ADD_COMMENT'):
      return comments.push(action);
    default:
      return comments;
  }
}
