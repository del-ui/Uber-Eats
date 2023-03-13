import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';


const YELP_API_KEY = 'D6jn_NFmhROZ9H9ApvpszHM-UM91I2RVqsDElkcDOtShZvnPyaPK-G-dCJrUPJH8H1NVZzR68jNZI8lL1a3zqvJHLgTnztV310Mr3Ms5-rl2iLmkItKjqDniMw4PZHYx';

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);

  const getRestaurantFromYelp = () => {
    const yelpUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=San+Francisco';

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

   fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        setRestaurantData(json.businesses);
      });          
  };
  useEffect(()=> {
    getRestaurantFromYelp();
  } , []);
  
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