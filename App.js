import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View
} from "react-native";
import  Main  from "./components/Main.jsx";
import { Logo } from "./components/Logo.jsx";

export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Logo />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  }
});
