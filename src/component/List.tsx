import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { LeaderboardItem } from '../Interfaces';
import { useSelector } from 'react-redux';
const leaderboard=require('../JSON/leaderboard.json')

const List = (props: LeaderboardItem) => {
    const leaderboardData=Object.values(leaderboard).sort((a,b)=>b.bananas-a.bananas)
    const leaderboardRedux= useSelector((state)=>state.searchUser.leaderboard)
    const searchedUserIndex= useSelector((state : {searchUser:{columnIndex:number}})=>state.searchUser.columnIndex)    
  return (
    <View style={{flex:1}}>
      <FlatList                     
        showsVerticalScrollIndicator={false}
        data={leaderboardRedux?.length>0?leaderboardRedux:leaderboardData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item,index }: { item: LeaderboardItem,index:number })=>{
            return (
                <View style={{flex:1,justifyContent:'space-between',flexDirection:'row'}}>
                    <Text style={{color:searchedUserIndex===index?'red':'black',flex:0.4,}}><Text style={{fontWeight:'bold'}}>{'\n'}Name{'\n'}</Text>{item?.name}</Text>
                    <Text style={{color:'black',flex:0.2,}}><Text style={{fontWeight:'bold',}}>{'\n'}Rank{'\n'}</Text>{index===0?'1st':index===1?'2nd':index===2?'3rd':index+1}</Text>
                    <Text style={{color:'black',flex:0.2,}}><Text style={{fontWeight:'bold',}}>{'\n'}Bananas{'\n'}</Text>{item?.bananas}</Text>
                </View>
            )
        }}
      />
    </View>
  )
}

export default List


