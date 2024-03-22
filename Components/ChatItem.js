import React from 'react';
import { View, Text } from 'react-native';
import BakeryItem from './BakeryItem';

const ChatItem = ({ handleQuantityChange, getItemPrice}) => {
  return (
    <View>
      <BakeryItem itemName="PaniPuri" price={getItemPrice('PaniPuri')} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="PeelPuri" price={getItemPrice('PeelPuri')} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="MasalPuri" price={getItemPrice('MasalPuri')} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="ParcelPuri" price={getItemPrice('ParcelPuri')} onQuantityChange={handleQuantityChange} />
      
    </View>
  );
};

export default ChatItem;
