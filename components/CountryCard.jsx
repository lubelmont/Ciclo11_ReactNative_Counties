import { Link } from "expo-router";
import { use, useEffect, useRef } from "react";
import {
    Animated,
    StyleSheet,
    Text,
    Image,
    Pressable,
  } from "react-native";

export default function CountryCard({ country, onPress }) {
  return (

    <Link asChild href={`/${country.cca2}`}>
     <Pressable
        style={styles.card}
        onPress={onPress}
        >
        <Image source={{ uri: country.flags.png }} style={styles.image} />
    
        <Text style={styles.titulo}>{country.name.common}</Text>
    </Pressable>
    </Link>

  );
  
}

export function AnimatedCountryCard({ country, index }) {

  const opacity = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);
  
  
  return (
    <Animated.View style={{ opacity }}>
      <CountryCard
        country={country}
        onPress={() =>
          console.log("Pais --- " + country.name.common)
        }
      />
    </Animated.View>
  );
}




const styles = StyleSheet.create({
  

  card: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    //borderWidth: 1,
    //borderColor: 'red',
  },

  image: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginTop: 20,
  },

  titulo: {
    fontSize: 20,
    color: "white",
    fontweight: "bold",
    textAlign: "center",
    marginBottom: 20,
    padding: 10,
  },

});
