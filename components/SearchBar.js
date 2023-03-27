import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function SearchBar(cityHandler) {
  return (
    
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete 
      query={{key: "AIzaSyAM7kQ521EL2FMRda5XVSkyIi3-cUoYhkU"}}
      onPress={(data, details = null) => {
        console.log(data, description);
        const city = data.description.split(',')[0];
        cityHandler(city);
        
      }}

      placeholder='Search'
      styles={{
        textInput: {
          backgroundColor: "#eee",
          borderRadius: 40,
          fontWeight: "700",
          marginTop: 7,
          
        },
        textInputContainer: {
          backgroundColor: '#eee',
          borderRadius: 40,
          flexDirection: 'row',
          alignItems:'center',
          marginRight: 20,
        },

      }}
      renderLeftButton={() => (
        <View style={{marginLeft: 10,}}>
          <Ionicons name="location-sharp" size={24} />
        </View>
      )}

        renderRightButton={()=> (
          <View style={{
            marginRight: 8,
            flexDirection: 'row',
            backgroundColor: 'white',
            padding: 9,
            borderRadius: 30,
            alignItems: 'center'
            }}>
            <AntDesign name='clockcircle' size={11} style={{marginRight: 6}} />
            <Text>Search</Text>
          </View>
        )}

      />

    </View>

  )
}