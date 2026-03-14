import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import HomePage from "./screens/HomePage";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Đăng nhập" }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: "Trang chủ" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}