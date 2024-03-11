import React from 'react';
import { View, Text } from 'react-native';
import BakeryItem from './BakeryItem';

const Tiffen = ({ handleQuantityChange }) => {
  return (
    <View>
        <View>
      <BakeryItem itemName="Idly" price={10} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="Dosa" price={20} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="Pongal" price={30} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="Puri" price={25} onQuantityChange={handleQuantityChange} />
      
    </View>
    </View>
  )
}

export default Tiffen