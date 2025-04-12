import { Link } from "expo-router";
import { View, Text, SafeAreaView, Pressable } from "react-native";

export default function About() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <Link asChild href={"/"} style={{ left: 20 }}>
        <Pressable>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Volver
          </Text>
        </Pressable>
      </Link>
      <View
        style={{
          flex: 1,
          backgroundColor: "#000",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Countries App es una aplicación interactiva que te permite explorar
          información sobre diferentes países del mundo. Con una interfaz
          intuitiva y atractiva, puedes: Ver detalles básicos de cada país, como
          su nombre y bandera. Navegar por una lista animada de países.
          Descubrir datos interesantes de manera rápida y sencilla. Esta
          aplicación está diseñada para ser educativa y entretenida, ideal para
          quienes desean aprender más sobre geografía y cultura global. ¡Explora
          el mundo desde la palma de tu mano!
        </Text>
      </View>
    </SafeAreaView>
  );
}
