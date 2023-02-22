import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HeaderTabs() {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <HeaderButton text="Delivery" btncolor="black" textColor="white"  />
        <HeaderButton text="Pickup" btncolor="white" textColor="black" />
    </View>
  );
}
const HeaderButton = (props) => (
   
        <TouchableOpacity style={{
            backgroundColor: props.btncolor,
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
            marginTop: 25
        }}>
            <Text style={{color: props.textColor, fontSize: 15, fontWeight: "900"}}>{props.text}</Text>
        </TouchableOpacity>  

    
);