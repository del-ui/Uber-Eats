import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
    {
        name: "Beachesside Bar",
        image_url:
            "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952__340.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,

    },
    {
        name: "Benihana",
        image_url:
            "https://toohotel.com/wp-content/uploads/2022/09/TOO_restaurant_Panoramique_vue_Paris_Seine_Tour_Eiffel_2.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 100,
        rating: 4.5,

    },
    {
        name: "China Town",
        image_url:
            "https://img.etimg.com/thumb/width-1200,height-900,imgsize-829462,resizemode-1,msid-82666514/industry/services/hotels-/-restaurants/staggered-lockdowns-start-to-bite-battered-restaurants.jpg",
        categories: ["Chinese", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.7,

    }
]


export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
        {props.restaurantData.map((restaurant,index) =>(

            <View 
            key={index}
            style={{
                padding: 15, 
                backgroundColor: 'white',
                marginTop: 10
                }}> 
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo 
                name={restaurant.name} 
                rating={restaurant.rating} 
                />
            </View>

        ))}
        
    </TouchableOpacity>
    
    
    
  );
}

const RestaurantImage = (props) =>(
    <>
    <Image
        source = {{
            uri: props.image,
        }}
        style={{width: "100%", height: 180}}
        />
        <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
            <MaterialCommunityIcons name='heart-outline' size={25} color="#fff" />
        </TouchableOpacity>
    
    </>
    
);

const RestaurantInfo = (props) =>(
    <View 
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10
        }}
    >
        <View>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{props.name} </Text>
            <Text 
                style={{fontSize: 13, color: 'gray'}}>30-45 . Min
            </Text>
        </View>
        <View 
            style={{
                backgroundColor: '#eee', 
                height: 30, 
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15
                }}>
                <Text> {props.rating} </Text>
        </View>
        
    </View>
)
