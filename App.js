import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const titulo = "Hola Mundo desde React Native";

const icon = require('./assets/icon.png');



export default function App() {
  return (
    <View style={styles.container}>
      <Image source={icon} style={[styles.image, {borderWidth:2, bordercolor: '#ede'}]} />
      <Text>{titulo}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 50, 
    width: 100, 
    height: 100
  }
});
