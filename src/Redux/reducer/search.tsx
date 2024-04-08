// // reducer of search

import { SEARCH_USER_FAILURE, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS } from '../action/types'

interface SearchUserRequestAction {
    type: typeof SEARCH_USER_REQUEST;
  }
  
  interface SearchUserSuccessAction {
    type: typeof SEARCH_USER_SUCCESS;
    payload: {
      username: string;
      leaderboard: { [key: string]: { name: string; bananas: number } };
    };
  }
  
  interface SearchUserFailureAction {
    type: typeof SEARCH_USER_FAILURE;
    payload: string;
  }

  export type SearchUserAction =
  | SearchUserRequestAction
  | SearchUserSuccessAction
  | SearchUserFailureAction;