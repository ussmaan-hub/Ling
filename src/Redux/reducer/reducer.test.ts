// redux/reducers.test.ts
import {
  SEARCH_USER_FAILURE,
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
} from '../action/types';
import reducer from './baseReducer';
import {describe, expect, it} from '@jest/globals';
import leaderboard from '../../JSON/leaderboard.json';
interface LeaderboardEntry {
  name: string;
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  stars: number;
  subscribed: boolean;
  uid: string;
}
type StateType = {
  searchUser: {
    username: string;
    leaderboard: LeaderboardEntry[];
    loading: boolean;
    error: string | null;
    error_message: string;
  };
  loading: boolean;
  error:null;
};

const initialState: StateType = {
  searchUser: {
    username: '',
    leaderboard: [],
    loading: false,
    error: null,
    error_message: '',
  },
  loading: true,
  error: null,

};
describe('searchUser reducer', () => {
  it('handles SEARCH_USER_REQUEST', () => {
    const action = {type: SEARCH_USER_REQUEST};
    const newState = reducer(initialState, action);
    expect(newState.searchUser.loading).toEqual(true);
    expect(newState.searchUser.error).toBeNull();
  });

  it('handles SEARCH_USER_SUCCESS with user in top 10', () => {
    const data = Object.values(leaderboard).sort(
      (a, b) => b.bananas - a.bananas,
    );
    const action = {type: SEARCH_USER_SUCCESS, payload: {name: 'Emma', data}};
    const newState = reducer(initialState, action);
    expect(newState.searchUser.loading).toEqual(false);
    console.log(newState.searchUser.error,'newState.error');
    
    expect(newState.searchUser.error).toBeNull();

    expect(newState.searchUser?.data?.length).toEqual(data.length);
  });

  it('handles SEARCH_USER_SUCCESS with user not in top 10', () => {
    const data = Object.values(leaderboard).sort(
      (a, b) => b.bananas - a.bananas,
    );
    const action = {type: SEARCH_USER_SUCCESS, payload: {name: 'Ivy', data}};
    const newState = reducer(initialState, action);
    expect(newState.searchUser.loading).toEqual(false);
    expect(newState.searchUser.error).toBeNull();
    expect(newState.searchUser?.data?.length).toEqual(data.length);
  });

  it('handles SEARCH_USER_FAILURE', () => {
    const errorMessage = 'User not found';
    const action = {type: SEARCH_USER_FAILURE, payload: errorMessage};
    const newState = reducer(initialState, action);
    console.log(newState.searchUser.loading,'newState.loading');
    console.log(newState.searchUser.error,'newState.error');
    
    expect(newState.searchUser.loading).toEqual(false);
    expect(newState.errorMsg?.error_message).toEqual(errorMessage);
  });

});
