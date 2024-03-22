// TabNavigator.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, TouchableHighlight } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Drinks from './Drinks';
import ChatItem from './ChatItem';
import Tiffen from './Tiffen';
import Lunch from './Lunch';
import Evening from './Evening';
import Dinner from './Dinner';
import { getItemPrice } from '../firebaseConfig';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  const [itemQuantities, setItemQuantities] = useState({});

  const handleQuantityChange = (itemName, newQuantity) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: newQuantity,
    }));
  };

  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    Object.values(itemQuantities).forEach((quantity) => {
      totalQuantity += quantity;
    });
    return totalQuantity;
  };

  const calculateTotalAmount = () => {
    let totalAmount = 0;
    for (const [itemName, quantity] of Object.entries(itemQuantities)) {
      const itemPrice = getItemPrice(itemName);
      totalAmount += quantity * itemPrice;
    }
    return totalAmount;
  };

   const getItemPrice = (itemName) => {
    const itemPrices = {
      Tea: 12,
      Coffee: 15,
      Vada: 8,
      PaniPuri: 30,
      PeelPuri: 25,
      MasalPuri: 20,
      ParcelPuri:40,
      Idly:10,
      Dosa:20,
      Pongal:30,
      Puri:25,
      LemonRice:40,
      TomatoRice:40,
      MintRice:40,
      Meals:55,
      Noodles:40,
      Parotta:20,

    };

    return itemPrices[itemName] || 0;
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
          {() => <Drinks handleQuantityChange={handleQuantityChange}  getItemPrice={getItemPrice}/>}
        </Tab.Screen>
        <Tab.Screen name="Chat Items">
          {() => <ChatItem handleQuantityChange={handleQuantityChange} getItemPrice={getItemPrice} />}
        </Tab.Screen>
        <Tab.Screen name="Tiffen">
          {() => <Tiffen handleQuantityChange={handleQuantityChange} getItemPrice={getItemPrice}/>}
        </Tab.Screen>
        <Tab.Screen name="Lunch">
          {() => <Lunch handleQuantityChange={handleQuantityChange} getItemPrice={getItemPrice}/>}
        </Tab.Screen>
        <Tab.Screen name="Evening">
          {() => <Evening handleQuantityChange={handleQuantityChange} getItemPrice={getItemPrice}/>}
        </Tab.Screen>
        <Tab.Screen name="Dinner">
          {() => <Dinner handleQuantityChange={handleQuantityChange} getItemPrice={getItemPrice}/>}
        </Tab.Screen>
       
      </Tab.Navigator>
      <View style={styles.bottomView}>
        <View>
        <Text style={styles.bottomLeft2}>Amount: {calculateTotalAmount()}rs</Text>
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
      android: {
        elevation: 5,
        
      },
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
    marginLeft:55,
   
  },
  txtBtn: {
    color:'#fff',
    fontSize:16,
    fontWeight:'600',

  },
  bottomLeft1:{
    marginTop:5,
    fontSize:16,
    fontWeight:'400',
  },
  bottomLeft2:{
   
    fontSize:20,
    fontWeight:'600',
  }
});

export default TabNavigator;