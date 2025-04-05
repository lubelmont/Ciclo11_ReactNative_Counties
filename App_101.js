import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, Pressable } from 'react-native';

const titulo = "Hola Mundo desde React Native";

const icon = require('./assets/icon.png');



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={{ uri: "https://flagcdn.com/w320/mx.png" }} style={[styles.image, {}]} />
      <Text style={{ color: 'white' }}>{titulo}</Text>
      <Button title='Presiona aqui' onPress={() => alert('Hola Mundo desde React Native')} 
        style={{ backgroundColor: 'red', color: 'white' }}
        />

        <TouchableHighlight
          onPress={() => alert('Hola Mundo desde React Native TouchableHighlight')}
          style={styles.button_principal}
        >
          <Text style={{ color: 'white' }}>Presiona aqui</Text>
        
        </TouchableHighlight>

      <Pressable
          onPress={() => {
            alert('Hola Mundo desde React Native Pressable');
          }}
          style={({pressed}) => {[styles.button_principal, 
            {backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'}]}}>
          {({pressed}) => (
            <Text style={[styles.text,{fontSize: pressed ? 32 : 16 }]}>{pressed ? 'Pressed!' : 'Presiona aqui'}</Text>
          )}
        </Pressable>


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
