import { View } from "react-native";
import { Slot } from "expo-router";
import { Logo } from "../components/Logo";

export default function Layout() {

    return (
        <View style={{ flex: 1, backgroundColor: "#000" }}>
           
            <Logo />
            <Slot />
        </View>
    )

}