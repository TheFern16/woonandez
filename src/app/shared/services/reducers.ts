import { Action } from '@ngrx/store';

export const ADD_COMMENT = 'ADD_COMMENT';

export function commentReducer(state: Array<any> = [], action: Action) {
  switch (action.type) {
    case ADD_COMMENT:
      return state.push(action);
    default:
      return state;
  }
}