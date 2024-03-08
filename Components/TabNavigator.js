import React from "react";
import { View, Text, StyleSheet, Platform,  ScrollView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Drinks from "./Drinks";


function Screen1() {
  return (
    <View style={styles.screen}>
      <Text>Screendddddddd 1</Text>
      <ScrollView>
      {/* Tea Section */}
      <Drinks productName="Tea" />

      {/* Coffee Section */}
      {/* <Drinks productName="Coffee" />

      {/* Other Juices Section */}
      {/* <Drinks productName="Orange Juice" />
      <Drinks productName="Apple Juice" /> */} 
      {/* Add more drink categories as needed */}
    </ScrollView>
    </View>
  );
}

function Screen2() {
  return (
    <View style={styles.screen}>
      <Text>Screen 2</Text>
    </View>
  );
}

function Screen3() {
  return (
    <View style={styles.screen}>
      <Text>Screen 3</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <View style={styles.container}>
        
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarItemStyle: { width: 100 },
          tabBarIndicatorStyle: { backgroundColor: "blue" },
        }}
      >
        <Tab.Screen name="Drinks" component={Screen1} />
        <Tab.Screen name="Chat items" component={Screen3} />
        <Tab.Screen name="Tiffen" component={Screen2} />
        <Tab.Screen name="Lunch" component={Screen3} />
        <Tab.Screen name="Dinner" component={Screen3} />
      </Tab.Navigator>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#F7F7F7'
  },
});

export default TabNavigator;
