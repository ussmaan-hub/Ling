import {applyMiddleware, compose, createStore} from 'redux';
import {thunk} from 'redux-thunk';
import  baseReducer from './reducer/baseReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    baseReducer,
    composeEnhancers(applyMiddleware(thunk))
);


export default {
    store,
};
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch