import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Input from '../component/Input';
import List from '../component/List';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {clearOutName, searchUser, searchUserByName} from '../Redux/action/search';

type Props = {};

const Main = (props: Props) => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch: Dispatch<any> = useDispatch();

  const handleSearch = () => {
    dispatch(searchUser(inputValue));
  };
  let searchTimeout: NodeJS.Timeout;



  const onHalfwaySearch = (text: string) => {
    clearSearchTimeout();
    searchTimeout = setTimeout(() => {
      dispatch(searchUserByName(text));
    }, 1000);
    if(text.length===0)
      {
        dispatch(clearOutName());
      }

  };
  const clearSearchTimeout = () => {
    clearTimeout(searchTimeout);
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
          setInputValue={(text)=> (setInputValue(text), onHalfwaySearch(text))}
        />
        <List />
      </View>
    </View>
  );
};

export default Main;
