import { Link } from "expo-router";
import { View, Text, SafeAreaView, Pressable, StyleSheet } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function About() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      
      <Link asChild href={"/"} style={{ left: 20 }}>
        <Pressable>
          <FontAwesome5 name="home" size={24} color="white" />

        </Pressable>
      </Link>

      <View style={styles.container}>

        <Text style={styles.title}>
          Countries in the word
        </Text>

        <Text style={styles.descripcion}>
        Countries App es una aplicación interactiva diseñada para explorar información sobre los países del mundo de manera fácil y divertida. Con una interfaz intuitiva y moderna, podrás:

        {"\n\n"}- Descubrir detalles básicos: Conoce el nombre, la bandera y otros datos esenciales de cada país.
        {"\n"}- Navegar por una lista animada: Explora países de forma dinámica y visualmente atractiva.
        {"\n"}- Aprender datos interesantes: Accede rápidamente a información relevante y educativa.

Esta aplicación es perfecta para quienes desean aprender más sobre geografía y cultura global. Ya sea por curiosidad o para fines educativos, Countries App te invita a explorar el mundo desde la palma de tu mano. ¡Empieza tu aventura ahora!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  title:{
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  descripcion:{
    color: "white",
    fontSize: 20,
    textAlign: "justify",
    paddingHorizontal: 20,
    lineHeight: 24,
  }
});
