import React from 'react';
import { View, Text } from 'react-native';
import BakeryItem from './BakeryItem';

const Tiffen = ({ handleQuantityChange, getItemPrice }) => {
  return (
    <View>
        <View>
      <BakeryItem itemName="Idly" price={getItemPrice('Idly')} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="Dosa" price={getItemPrice('Dosa')} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="Pongal" price={getItemPrice('Pongal')} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="Puri" price={getItemPrice('Puri')} onQuantityChange={handleQuantityChange} />
      
    </View>
    </View>
  )
}

export default Tiffen