import React from 'react';
import { View, Text } from 'react-native';
import BakeryItem from './BakeryItem';

const ChatItem = ({ handleQuantityChange }) => {
  return (
    <View>
      <BakeryItem itemName="PaniPuri" price={30} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="PeelPuri" price={25} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="MasalPuri" price={20} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="ParcelPuri" price={40} onQuantityChange={handleQuantityChange} />
      
    </View>
  );
};

export default ChatItem;
