import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./Components/TabNavigator";
import { Text, View, StyleSheet } from "react-native";
import Search from "./Components/Search";
// Adjust the path based on your file structure

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Naveen Bakery</Text>
      </View>
      <Search />

      {/* Other components or navigation can be added here */}
      <TabNavigator />
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
    fontFamily: "Madimi One", // Replace with the desired font family
  },
});
