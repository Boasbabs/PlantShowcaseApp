import * as React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Forgot from "../screens/Forgot";
import Browse from "../screens/Browse";
import Explore from "../screens/Explore";
import Welcome from "../screens/Welcome";
import Product from "../screens/Product";
import Settings from "../screens/Settings";

import { theme } from "../constants";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenStyles}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Browse" component={Browse} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenStyles = {
  headerStyle: {
    height: theme.sizes.base * 4,
    backgroundColor: theme.colors.white,
    borderBottomColor: "transparent",
    elevation: 0, // for android
  },
  headerBackImage: <Image source={require("../assets/icons/back.png")} />,
  headerBackTitle: null,
  headerLeftContainerStyle: {
    alignItems: "center",
    marginLeft: theme.sizes.base * 2,
    paddingRight: theme.sizes.base,
  },
  headerRightContainerStyle: {
    alignItems: "center",
    paddingRight: theme.sizes.base,
  },
};

export default Navigation;
