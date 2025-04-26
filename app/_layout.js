import { View } from "react-native";
import { Slot, Stack } from "expo-router";
import { Logo } from "../components/Logo";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { InfoIcon } from "../components/Icons.jsx";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import TabsLayout from "./(tabs)/_layout.js";

export default function Layout() {

    return (
        <View style={{ flex: 1, backgroundColor: "#000" }}>
            <Stack  
                screenOptions={{
                    headerStyle: { backgroundColor: "#000" },
                    headerTintColor: "#fff",
                    headerTitle:"",
                    headerLeft: () => {}, 
                    headerRight: () =>(
                        <Link asChild href={"/about"}>
                                <Pressable>
                                  <InfoIcon />
                                  <FontAwesome5 name="info-circle" size={24} color="white"/>
                        
                                </Pressable>
                              </Link>
                        )

                }}
            /> 

        </View>
    )

}