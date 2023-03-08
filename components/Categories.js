import { View, Text, Image } from 'react-native'
import React from 'react'

const items = [
  {
    image: require("../Assets/images/soft-drink.png"),
    text: "Pick-up",
  },
  {
    image: require("../Assets/images/shopping-bag.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../Assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../Assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../Assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../Assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../Assets/images/desserts.png"),
    text: "Desserts",
  },
  
]

export default function Categories() {
  return (
    <View>
      <Image source={items[0].image} />
    </View>
  )
}