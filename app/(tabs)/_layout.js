import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function TabsLayout() {

    return <Tabs>
        <Tabs.Screen
            name="index"
            options={{
                headerShown: false,
                tabBarLabel: "Home",
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name="home" size={24} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="about"
            options={{
                headerShown: false,
                tabBarLabel: "About",
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name="info-circle" size={24} color={color} />
                ),
            }}
        />
    </Tabs>

}




