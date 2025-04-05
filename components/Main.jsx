import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { getCountriesByRegion } from "../lib/restcountries.js";
import { CountryCard } from "./CountryCard.jsx";

export default function Main() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountriesByRegion().then((data) => {
      setCountries(data);

    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView>
        {countries.length === 0 ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <FlatList
            data={countries}
            keyExtractor={(item) => item.name.common}
            renderItem={({ item }) => (
              <CountryCard
                country={item}
                onPress={() => console.log("Pais --- " + item.name.common)}
              />
            )}
          
          />
            
           
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

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

  button_principal: {
    backgroundColor: "red",
    color: "white",
    borderRadius: 100,
    padding: 10,
    height: 200,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});
