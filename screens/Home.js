import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>

    <View style={{backgroundColor: "white", padding: 15, marginTop: 20}}>
     <HeaderTabs />
     <SearchBar />
    </View>
    <Categories />
      
  </SafeAreaView>
  );
}