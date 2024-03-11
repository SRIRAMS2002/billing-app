import React from 'react';
import { View, Text } from 'react-native';
import BakeryItem from './BakeryItem';

const Lunch = ({ handleQuantityChange }) => {
  return (
    <View>
        <View>
      <BakeryItem itemName="LemonRice" price={40} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="TomatoRice" price={40} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="MintRice" price={40} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="Meals" price={55} onQuantityChange={handleQuantityChange} />
      
    </View>
    </View>
  )
}

export default Lunch