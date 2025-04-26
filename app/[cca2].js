import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";
import { Link } from "expo-router";
import { getCountriesByCCA2 } from "../lib/restcountries";
import { useEffect, useState } from "react";
export default function ContryDetails() {
  const { cca2 } = useLocalSearchParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    getCountriesByCCA2(cca2).then(setCountry);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
      }}
    >

      {country === null ? (
        <ActivityIndicator size={"large"} color={"white"} />
      ) : (
        <>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 40,
            }}
          >
            {country.name.common}
            {country.name.official}
          </Text>

          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 40,
            }}
          >
           Nombre oficial:  {country.name.official}
          </Text>

      
        </>
      )}
    </View>
  );
}
