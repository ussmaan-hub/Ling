import { SEARCH_USER_FAILURE, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS } from '../action/types';

export interface LeaderboardEntry {
  name: string;
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  stars: number;
  subscribed: boolean;
  uid: string;
}

interface SearchUserState {
  username: string;
  leaderboard: LeaderboardEntry[];
  loading: boolean;
  error: string | null;
  
}

const initialState: SearchUserState = {
  username: '',
  leaderboard: [],
  loading: false,
  error: null,
};

  interface SearchUserRequestAction {
  type: typeof SEARCH_USER_REQUEST;
}

 interface SearchUserSuccessAction {
  type: typeof SEARCH_USER_SUCCESS;
  payload: {
    username: string;
    leaderboard: LeaderboardEntry[];
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
const searchReducer = (state = initialState, action: any): SearchUserState => {
  switch (action.type) {
    case SEARCH_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        leaderboard: action.payload.leaderboard,
        loading: false,
        error: null,
      };
    case SEARCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default searchReducer;
