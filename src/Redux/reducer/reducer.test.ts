// redux/reducers.test.ts
import { SEARCH_USER_FAILURE, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS } from '../action/types';
import reducer from './baseReducer';
import {describe, expect, it} from '@jest/globals'

const initialState = {
  loading: false,
  error: null,
  leaderboard: [],
};

describe('searchUser reducer', () => {
  it('handles SEARCH_USER_REQUEST', () => {
    const action = { type: SEARCH_USER_REQUEST };
    const newState = reducer(initialState, action);
    expect(newState.loading).toEqual(true);
    expect(newState.error).toBeNull();
  });

  it('handles SEARCH_USER_SUCCESS with user in top 10', () => {
    const leaderboard = [
      { name: 'user1', bananas: 100 },
      { name: 'user2', bananas: 90 },
      // Add more mock data as needed
    ];
    const action = { type: SEARCH_USER_SUCCESS, payload: { username: 'user1', leaderboard } };
    const newState = reducer(initialState, action);
    expect(newState.loading).toEqual(false);
    expect(newState.error).toBeNull();
    expect(newState.leaderboard.length).toEqual(leaderboard.length);
    // Additional assertions based on expected state changes
  });

  it('handles SEARCH_USER_SUCCESS with user not in top 10', () => {
    const leaderboard = [
      { name: 'user1', bananas: 100 },
      { name: 'user2', bananas: 90 },
      // Add more mock data as needed
    ];
    const action = { type: SEARCH_USER_SUCCESS, payload: { username: 'user3', leaderboard } };
    const newState = reducer(initialState, action);
    expect(newState.loading).toEqual(false);
    expect(newState.error).toBeNull();
    expect(newState.leaderboard.length).toEqual(leaderboard.length);
    // Additional assertions based on expected state changes
  });

  it('handles SEARCH_USER_FAILURE', () => {
    const errorMessage = 'User not found';
    const action = { type: SEARCH_USER_FAILURE, payload: errorMessage };
    const newState = reducer(initialState, action);
    expect(newState.loading).toEqual(false);
    expect(newState.error).toEqual(errorMessage);
  });

  // Add more test cases as needed for different scenarios
});
