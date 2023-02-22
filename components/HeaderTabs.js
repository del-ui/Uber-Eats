import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HeaderTabs() {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <HeaderButton text="Delivery"  />
        <HeaderButton text="Pickup" />
    </View>
  );
}
const HeaderButton = (props) => (
   
        <TouchableOpacity style={{
            backgroundColor: "black",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
            marginTop: 25
        }}>
            <Text style={{color: "white", fontSize: 15, fontWeight: "900"}}>{props.text}</Text>
        </TouchableOpacity>  

    
);