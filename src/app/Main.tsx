import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Input from '../component/Input';
import List from '../component/List';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {searchUser} from '../Redux/action/search';

type Props = {};

const Main = (props: Props) => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch: Dispatch<any> = useDispatch();

  const handleSearch = () => {
    dispatch(searchUser(inputValue));
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: 'white',
      }}>
      <View style={{flex:1}}>
        <Input
          onpress={() => {
            handleSearch();
          }}
          InputValue={inputValue}
          setInputValue={setInputValue}
        />
        <List />
      </View>
    </View>
  );
};

export default Main;
