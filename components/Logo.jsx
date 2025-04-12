import { Text, View, Image, StyleSheet } from "react-native"

export const Logo = () => {


  return (
    
    <View style={styles.logoContainer}>

      <Image
        source={require("../assets/logoAppCountries.png")}
        style={styles.logoImage}
      />
      <Text style={styles.logoText}>
        Countries in the word
      </Text>


    </View>


  );
}

const styles = StyleSheet.create({
  logoContainer: {
    
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 30,
    paddingBottom: 20,
    width: "100%",
    padding: 20,
    backgroundColor: "#000",
  },
  logoImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    resizeMode: "contain",
    marginRight: 10,
  },

  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,

  },

})
