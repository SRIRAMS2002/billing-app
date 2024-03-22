// Drinks.js
import React, { useEffect, useState } from 'react';
import { View,Text } from 'react-native';
import BakeryItem from './BakeryItem';


const Drinks = ({ handleQuantityChange, getItemPrice }) => {

 
  
  

  return (
    <View>
      <BakeryItem itemName="Tea" price={getItemPrice('Tea')} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="Coffee" price={getItemPrice('Coffee')} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="Vada" price={getItemPrice('Vada')} onQuantityChange={handleQuantityChange} />

    </View>
  );
};

export default Drinks;
