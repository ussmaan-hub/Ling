// action of search

import { ThunkAction } from 'redux-thunk';
import { SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE } from '../action/types'
import { SearchUserAction } from '../reducer/search';

export const searchUser = (
    username: string
  ): ThunkAction<void, RootState, unknown, SearchUserAction> => async (dispatch, getState) => {
    dispatch({ type: SEARCH_USER_REQUEST });
  
    try {
      // Simulate fetching data (replace with actual API call)
      const response = await fetch('example.com/api/user/' + username);
      const data = await response.json();
  
      if (!data || !data.leaderboard) {
        throw new Error('User not found');
      }
  
      const { leaderboard } = data;
  
      // Process leaderboard to determine ranks
      const sortedLeaderboard = Object.values(leaderboard).sort((a, b) => b.bananas - a.bananas);
  
      // Find index of searched user
      const searchedUserIndex = sortedLeaderboard.findIndex((user) => user.name === username);
  
      if (searchedUserIndex === -1) {
        throw new Error('User not found');
      }
  
      dispatch({
        type: SEARCH_USER_SUCCESS,
        payload: { username, leaderboard: sortedLeaderboard },
      });
    } catch (error) {
      dispatch({
        type: SEARCH_USER_FAILURE,
        payload: error.message || 'An error occurred',
      });
    }
  };