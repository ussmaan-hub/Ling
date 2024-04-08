import { View, Text } from 'react-native'
import React from 'react'
import Input from './src/component/Input'
import List from './src/component/List'

export default function App() {
  const [inputValue, setInputValue] = React.useState('')
  return (
    <View style={{ flex: 1,alignItems: 'center',paddingTop: 50 }}>
      <View>
      <Input InputValue={inputValue} setInputValue={setInputValue} />
      <List />
      </View>
    </View>
  )
}