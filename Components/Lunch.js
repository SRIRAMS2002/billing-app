import React from "react";
import { View, Text } from "react-native";
import BakeryItem from "./BakeryItem";

const Lunch = ({ handleQuantityChange , getItemPrice}) => {
  return (
    <View>
      <View>
        <BakeryItem
          itemName="LemonRice"
          price={getItemPrice('LemonRice')}
          onQuantityChange={handleQuantityChange}
        />
        <BakeryItem
          itemName="TomatoRice"
          price={getItemPrice('TomatoRice')}
          onQuantityChange={handleQuantityChange}
        />
        <BakeryItem
          itemName="MintRice"
          price={getItemPrice('MintRice')}
          onQuantityChange={handleQuantityChange}
        />
        <BakeryItem
          itemName="Meals"
          price={getItemPrice('Meals')}
          onQuantityChange={handleQuantityChange}
        />
      </View>
    </View>
  );
};

export default Lunch;
