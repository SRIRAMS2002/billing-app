// TabNavigator.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, TouchableHighlight } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import database from '../firebaseConfig';
import Drinks from './Drinks';
import ChatItem from './ChatItem';
import Tiffen from './Tiffen';
import Lunch from './Lunch';
import Evening from './Evening';
import Dinner from './Dinner';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  const [tabData, setTabData] = useState({});

  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    Object.values(tabData).forEach((item) => {
      totalQuantity += item.quantity || 0;
    });
    return totalQuantity;
  };

  const calculateTotalAmount = () => {
    let totalAmount = 0;
    for (const item of Object.values(tabData)) {
      totalAmount += (item.quantity || 0) * (item.price || 0);
    }
    return totalAmount;
 

  };

  useEffect(() => {
    fetchTabDataFromFirebase();
  }, []);

  const handleQuantityChange = (itemName, newQuantity) => {
    database.ref(`tabSection/${itemName}`).set(newQuantity);
    setTabData((prevData) => ({
      ...prevData,
      [itemName]: { ...prevData[itemName], quantity: newQuantity },
    }));
  };

  const fetchTabDataFromFirebase = () => {
    database.ref('tabSection').once('value', (snapshot) => {
      const data = snapshot.val();
      setTabData(data || {});
    });
  };

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarItemStyle: { width: 100 },
          tabBarIndicatorStyle: { backgroundColor: 'blue' },
        }}
      >
        <Tab.Screen name="Drinks">
          {() => <Drinks handleQuantityChange={handleQuantityChange} />}
        </Tab.Screen>
        <Tab.Screen name="Chat Items">
          {() => <ChatItem handleQuantityChange={handleQuantityChange} />}
        </Tab.Screen>
        <Tab.Screen name="Tiffen">
          {() => <Tiffen handleQuantityChange={handleQuantityChange} />}
        </Tab.Screen>
        <Tab.Screen name="Lunch">
          {() => <Lunch handleQuantityChange={handleQuantityChange} />}
        </Tab.Screen>
        <Tab.Screen name="Evening">
          {() => <Evening handleQuantityChange={handleQuantityChange} />}
        </Tab.Screen>
        <Tab.Screen name="Dinner">
          {() => <Dinner handleQuantityChange={handleQuantityChange} />}
        </Tab.Screen>
      </Tab.Navigator>
      <View style={styles.bottomView}>
        <View>
          <Text style={styles.bottomLeft2}>Amount: {calculateTotalAmount()} rs</Text>
          <Text style={styles.bottomLeft1}>Quantity: {calculateTotalQuantity()} units</Text>
        </View>
        <TouchableHighlight style={styles.submitBtn}>
          <Text style={styles.txtBtn}>Print</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: { elevation: 5 },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
  },
  bottomView: {
    position: 'absolute',
    height: 80,
    width: '100%',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  submitBtn: {
    width: '40%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#273BE2',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 55,
  },
  txtBtn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomLeft1: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '400',
  },
  bottomLeft2: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default TabNavigator;
