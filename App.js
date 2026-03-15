import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./src/screens/LoginScreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";

import MaleProductsScreen from "./src/screens/MaleProductsScreen";
import FemaleProductsScreen from "./src/screens/FemaleProductsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ProductTabs() {
  return (
    <Tab.Navigator>

      <Tab.Screen
        name="Masculino"
        component={MaleProductsScreen}
      />

      <Tab.Screen
        name="Feminino"
        component={FemaleProductsScreen}
      />

    </Tab.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Products"
          component={ProductTabs}
        />

        <Stack.Screen
          name="Details"
          component={ProductDetailScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}


