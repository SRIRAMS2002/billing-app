import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Drinks from './Drinks';
import ChatItem from './ChatItem';

const BottomTabNavigator = () => {
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
      Tea: 22,
      Coffee: 15,
      Vada: 8,
      Pani: 30,
      Peel: 25,
      Rasam: 50,
    };

    return itemPrices[itemName] || 0;
  };

  return (
    <View>
      <Text>Total Quantity: {calculateTotalQuantity()} units</Text>
      <Text>Total Amount: {calculateTotalAmount()} rs</Text>

      <ChatItem handleQuantityChange={handleQuantityChange} />
    </View>
  );
};

export default BottomTabNavigator;
