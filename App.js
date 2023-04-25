import React, { useCallback } from "react";
import Recipes from './components/Recipes'
import ShoppingList from "./components/ShoppingList";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();


function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} headerShown={false} />
        <Stack.Screen name="Recipes" component={Recipes} />
        <Stack.Screen name="Shopping" component={ShoppingList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;