import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./Components/TabNavigator";
import BottomTabNavigator from "./Components/BottomTabNavigator";
import { Text, View, StyleSheet } from "react-native";
import Search from "./Components/Search";
import { Image } from 'react-native';
export default function App() {
  // Assuming you have some data, replace this with your actual data
  const drinksData = {
    Tea: 2,
      Coffee: 15,
      Vada: 8,
  };

  return (
    <NavigationContainer>
      {/* Container for the entire app */}
      <View style={{ flex: 1 }}>
        {/* Header Section */}
        <View style={styles. headerContainer}>
        <Image source={require('./assets/bakery.png')} style={styles.logo} />
          <Text style={styles.title}>Naveen Bakery</Text>
        </View>

        {/* Main Content */}
        <View style={{ flex: 1 }}>
    

          {/* Add the new bottom tab navigator */}
          <TabNavigator drinksData={drinksData}/>

        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
    marginBottom: 10,
  },
  logo: {
    width: 50, // Adjust the width according to your image size
    height: 50, // Adjust the height according to your image size
    marginRight: 5,
    marginLeft:10,
  },
});
