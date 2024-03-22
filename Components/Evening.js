import React from 'react';
import { View, Text } from 'react-native';
import BakeryItem from './BakeryItem';

const Evening = ({ handleQuantityChange, getItemPrice }) => {
  return (
    <View>
        <View>
      <BakeryItem itemName="Noodles" price={getItemPrice('Noodles')} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="Parotta" price={getItemPrice('Parotta')} onQuantityChange={handleQuantityChange} />
      
    </View>
    </View>
  )
}

export default Evening