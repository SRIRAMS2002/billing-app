// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./Components/TabNavigator";
import BottomTabNavigator from "./Components/BottomTabNavigator"; // Import the new component
import { Text, View, StyleSheet } from "react-native";
import Search from "./Components/Search";

export default function App() {
  return (
    <NavigationContainer>
      {/* Container for the entire app */}
      <View style={{ flex: 1 }}>
        {/* Header Section */}
        <View style={styles.container}>
          <Text style={styles.title}>Naveen Bakery</Text>
        </View>

        {/* Main Content */}
        <View style={{ flex: 1 }}>
          <Search />

          {/* Add the new bottom tab navigator */}
          {/* <BottomTabNavigator /> */}
          <TabNavigator/>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
