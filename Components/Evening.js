import React from 'react';
import { View, Text } from 'react-native';
import BakeryItem from './BakeryItem';

const Evening = ({ handleQuantityChange }) => {
  return (
    <View>
        <View>
      <BakeryItem itemName="Noodles" price={40} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="Parotta" price={20} onQuantityChange={handleQuantityChange} />
      
    </View>
    </View>
  )
}

export default Evening