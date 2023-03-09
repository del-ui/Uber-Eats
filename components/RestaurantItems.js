import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function RestaurantItems() {
  return (
    <View>
      <RestaurantImage/>
    </View>
  )
}

const RestaurantImage = () =>(

    <TouchableOpacity>
        <Image source = {{uri: "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952__340.jpg"}}
    style={{width: "100%", height: 180}}/>
    </TouchableOpacity>
)
