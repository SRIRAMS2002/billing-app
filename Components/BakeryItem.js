import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
const BakeryItem = ({ itemName, price, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    onQuantityChange(itemName, quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onQuantityChange(itemName, quantity - 1);
    }
  };

  return (
    <View style={styles.card}>
      <View>

      <Text style={styles.itemName}>{itemName}</Text>
      <Text>Price: {price} rs</Text>
      </View>


      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decreaseQuantity} style={styles.button}>
        <Icon name="minus" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>{quantity}</Text>
        <TouchableOpacity onPress={increaseQuantity} style={styles.button}>
        <Icon name="plus" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginVertical: 8,
    ...Platform.select({
      android: {
        elevation: 3, // Android elevation
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
    padding: 16,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjusted to add space
    paddingHorizontal: 10, 

  },
  button: {
    backgroundColor: '#AEB8FF',
    borderRadius: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7, 
  },
  itemName:{
    fontWeight: "bold",
    fontSize: 20,
  },

});

export default BakeryItem;
