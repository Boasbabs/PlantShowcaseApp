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

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={screenOptions}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}

          // options={{ title: "Login" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          // options={{ title: "SignUp" }}
        />
        {/* <Stack.Screen name="Forgot" component={Forgot} /> */}
        {/* <Stack.Screen name="Browse" component={Browse} /> */}
        {/* <Stack.Screen name="Explore" component={Explore} /> */}
        {/* <Stack.Screen name="Product" component={Product} /> */}
        {/* <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  gestureEnabled: true,
  headerStyle: {
    height: theme.sizes.base * 4,
    backgroundColor: theme.colors.white,
    borderBottomColor: "transparent",
    elevation: 0, // for android
  },
  headerBackTitle: null,
  // headerLeftContainerStyle: {
  //   alignItems: "center",
  //   marginLeft: theme.sizes.base * 2,
  //   paddingRight: theme.sizes.base,
  // },
  // headerRightContainerStyle: {
  //   alignItems: "center",
  //   paddingRight: theme.sizes.base,
  // },
  headerBackTitleVisible: false,
};

export default MainStackNavigator;
