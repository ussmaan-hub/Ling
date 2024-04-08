// action of search

import { ThunkAction } from 'redux-thunk';
import { SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE } from '../action/types'
import { SearchUserAction } from '../reducer/search';
import { Alert } from 'react-native';
import { RootState } from '..';
const leaderboard=require('../../JSON/leaderboard.json')

export const searchUser = (
    username: string
  ): ThunkAction<void, RootState, unknown, SearchUserAction> => async (dispatch, getState) => {
    dispatch({ type: SEARCH_USER_REQUEST });
  

    try {  
      // Process leaderboard to determine ranks
      const sortedLeaderboard = Object.values(leaderboard).sort((a, b) => b.bananas - a.bananas);
  
      // Find index of searched user
      const searchedUserIndex = sortedLeaderboard.findIndex((user) => user.name === username);
  
      if (searchedUserIndex === -1) {
       Alert.alert('This user name does not exist! Please specify an existing user name!');
      }
      if (searchedUserIndex >= 10) {
        console.log(searchedUserIndex,'searchedUserIndex');
        console.log(sortedLeaderboard[9],'sortedLeaderboard[9]');
        console.log(sortedLeaderboard[searchedUserIndex],'sortedLeaderboard[searchedUserIndex]');
        
        const lastRankedUser =  sortedLeaderboard[9]; // Get the user at rank 10
        sortedLeaderboard[searchedUserIndex] = lastRankedUser; // Replace searched user
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