import {
    StyleSheet,
    Text,
    Image,
    Pressable,
  } from "react-native";

export function CountryCard({ country, onPress }) {
  return (


     <Pressable
        style={styles.card}
        onPress={onPress}
        >
        <Image source={{ uri: country.flags.png }} style={styles.image} />
    
        <Text style={styles.titulo}>{country.name.common}</Text>
    </Pressable>

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
