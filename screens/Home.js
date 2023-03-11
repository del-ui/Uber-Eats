import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants)
  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>

    <View style={{backgroundColor: "white", padding: 15, marginTop: 20}}>
     <HeaderTabs />
     <SearchBar />
    </View>
    
    <ScrollView showsVerticalScrollIndicator={false}>

    <Categories />
    <RestaurantItems restaurantData={restaurantData} />
   

    </ScrollView>

    
      
  </SafeAreaView>
  );
}