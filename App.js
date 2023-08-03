import "react-native-gesture-handler";
import React from "react";
import Applications from "./src/features/applications/Applications";
import Discovers from "./src/features/discovers/Discovers";
import Community from "./src/features/community/Community";
import Bookmarks from "./src/features/bookmarks/Bookmarks";
import Settings from "./src/features/settings/Settings";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer } from "@react-navigation/native";
import colors from "tailwindcss/colors";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Applications") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Discovers") {
              iconName = focused ? "search" : "search";
            } else if (route.name === "Community") {
              iconName = focused ? "users" : "users";
            } else if (route.name === "Bookmarks") {
              iconName = focused ? "bookmark" : "bookmark";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings";
            }

            return <Feather name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.purple[500],
          tabBarInactiveTintColor: colors.gray[400],
          headerShown: false,
        })}
      >
        <Tab.Screen name="Applications" component={Applications} />
        <Tab.Screen name="Discovers" component={Discovers} />
        <Tab.Screen name="Community" component={Community} />
        <Tab.Screen name="Bookmarks" component={Bookmarks} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
