import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Input from './src/component/Input';
import List from './src/component/List';
import {Provider, useDispatch} from 'react-redux';
import store, {AppDispatch} from './src/Redux/index';
import {searchUser} from './src/Redux/action/search';
import {ThunkDispatch} from 'redux-thunk';
import {Dispatch} from 'redux';
import Main from './src/app/Main';
export default function App() {
  return (
    <Provider store={store.store}>
        <Main />
    </Provider>
  );
}
