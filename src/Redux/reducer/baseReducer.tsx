// basereducer file

import { combineReducers } from 'redux';

import { SEARCH_USER_FAILURE, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS } from '../action/types';
import { SearchUserAction } from './search';

export default combineReducers({
    searchUser: (state = {}, action: SearchUserAction) => {
        switch (action.type) {
            case SEARCH_USER_REQUEST:
                return {
                    ...state
                }
            case SEARCH_USER_SUCCESS:
                return {
                    ...state,
                    ...action.payload
                }
            case SEARCH_USER_FAILURE:
                return {
                    ...state,
                    error: action.payload
                }
            default:
                return state
        }
    }

})
