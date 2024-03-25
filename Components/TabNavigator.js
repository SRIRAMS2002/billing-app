// TabNavigator.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableHighlight,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Drinks from "./Drinks";
import ChatItem from "./ChatItem";
import Tiffen from "./Tiffen";
import Lunch from "./Lunch";
import Evening from "./Evening";
import Dinner from "./Dinner";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {

 

  const [items, setItems] = useState([]);

  const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, "Naveen"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
    const itemsArray = [];
    querySnapshot.forEach((doc) => {
      itemsArray.push({ id: doc.id, ...doc.data() });
    });
    setItems(itemsArray);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarItemStyle: { width: 100 },
          tabBarIndicatorStyle: { backgroundColor: "blue" },
        }}
      >
        <Tab.Screen name="Drinks">
          {() => (
            <Drinks
              items={items}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Chat Items">
          {() => (
            <ChatItem
            items={items}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Tiffen">
          {() => (
            <Tiffen
            items={items}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Lunch">
          {() => (
            <Lunch
            items={items}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Evening">
          {() => (
            <Evening
            items={items}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Dinner">
          {() => (
            <Dinner
            items={items}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
      {items.map((item) => (
          <View key={item.id}>
            {/* Render UI for each item */}
           
            {/* Render other data for the item */}
            {/* For example: <p>Name: {item.name}</p> */}
          </View>
        ))}

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
});

export default TabNavigator;
