import { StatusBar } from 'expo-status-bar';
import { use, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, Pressable } from 'react-native';
import { getCountriesByRegion } from './lib/restcountries.js';

const titulo = "Hola Mundo desde React Native";

const icon = require('./assets/icon.png');


export default function App() {

/*

Solo un ejemplo de como usar el hook useState

const [clicksNumber, setClicksNumber] = useState(20);


if (clicksNumber > 1) {
  console.log(clicksNumber + 'x onPress');
} else if (clicksNumber > 0) {
  console.log('onPress');
}
*/


const [countries, setCountries] = useState([]);

useEffect(
  () => {
    getCountriesByRegion()
      .then((data) => {
        setCountries(data);
      })
      
  },
  []
);



  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      { countries.map((country, index) => (
        <Pressable key={index} onPress={() => console.log(country.name.common)}>
          <Image source={{ uri: country.flags.png }} style={styles.image} />
          <Text style={styles.text}>{country.name.common}</Text>
        </Pressable>
      ))}

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 50, 
    width: 100, 
    height: 100,
    borderWidth:1, 
    bordercolor: '#ede'
  },

  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  button_principal: {
    backgroundColor: 'red', 
            color: 'white', 
            borderRadius: 100, 
            padding: 10, 
            height: 200, 
            width: 200, 
            alignItems: 'center', 
            justifyContent: 'center'
  }
});
