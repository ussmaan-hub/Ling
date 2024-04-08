import { View, Text, TextInput, Dimensions, Image, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { InputInterface } from '../Interfaces'

const width = Dimensions.get('screen').width
const Input: React.FC<InputInterface> = ({ InputValue, setInputValue }) => {
  return (
    <View style={styles.main}>
      <View style={styles.seachView}>
        <Image source={require('../assets/images/search.png')} style={styles.image} />
        <TextInput placeholder='Search' value={InputValue} onChangeText={setInputValue} style={{ flex: 1, paddingLeft: 5 }} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text>
          Search
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  button: {
    padding: 5,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    marginLeft: 5,
  },
  seachView: {
    flexDirection: 'row',
    width: width - 100,
    borderWidth: 1,
    height: 40,
    paddingLeft: 10,
    borderRadius: 20,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
})