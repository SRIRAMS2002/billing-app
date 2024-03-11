import React from 'react';
import { View, Text } from 'react-native';
import BakeryItem from './BakeryItem';

const Drinks = ({ handleQuantityChange }) => {
  return (
    <View>
      <BakeryItem itemName="Tea" price={12} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="Coffee" price={15} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="Vada" price={8} onQuantityChange={handleQuantityChange} />
    </View>
  );
};

export default Drinks;
