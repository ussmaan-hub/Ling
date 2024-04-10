// basereducer file

import { combineReducers } from 'redux';

import { ERROR, ERROR_MSG, LOADING, LOADING_FALSE, LOADING_TRUE, SEARCH_USER_FAILURE, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS } from '../action/types';
import { Error, ErrorMsg, LoadingActionType } from './loading';
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
    username: string;
    leaderboard: LeaderboardEntry[];
    loading: boolean;
    error: string | null;
    error_message: string;
};

const initialState: StateType = {
    username: '',
    leaderboard: [],
    loading: false,
    error: null,
    error_message: 'User not found',
};

interface SearchActionType {
    type: string;
    payload?: any;
}
export default combineReducers({
    searchUser: (state = initialState, action: SearchActionType) => {
        switch (action.type) {
            case SEARCH_USER_REQUEST:
                return {
                    ...state,
                    loading: true
                }
            case SEARCH_USER_SUCCESS:
                return {
                    ...state,
                    ...action.payload,
                    loading: false
                }
            case SEARCH_USER_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    loading: false
                }
            default:
                return state
        }
    },
    loading: (state = true, action: LoadingActionType) => {
        switch (action.type) {
            case LOADING:
                return action.payload
            default:
                return state
        }
    },
    error: (state = initialState, action: Error) => {
        switch (action.type) {
            case ERROR:
                return action.payload

            default:
                return state
        }
    },
    errorMsg: (state = initialState, action: ErrorMsg) => {
        switch (action.type) {
            case ERROR_MSG:
                return action.payload
            default:
                return state
        }
    }



})
