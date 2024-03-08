import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
  const getTotalAmount = () => {
    return quantity * price;
  };

 
  return (
    <View style={styles.card}>
    <View style={styles.itemDetails}>
      <Text style={styles.productName}>{itemName}</Text>
      <Text style={styles.price}>Price: {price} rs</Text>
    </View>

    <View style={styles.quantityContainer}>
      <TouchableOpacity onPress={decreaseQuantity} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity onPress={increaseQuantity} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

const Drinks = () => {
  const [itemQuantities, setItemQuantities] = useState({});

  const handleQuantityChange = (itemName, newQuantity) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: newQuantity,
    }));
  };

  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    Object.values(itemQuantities).forEach((quantity) => {
      totalQuantity += quantity;
    });
    return totalQuantity;
  };

  const calculateTotalAmount = () => {
    let totalAmount = 0;
    for (const [itemName, quantity] of Object.entries(itemQuantities)) {
      // Assuming you have a 'price' associated with each item
      const itemPrice = getItemPrice(itemName); 
      totalAmount += quantity * itemPrice;
    }
    return totalAmount;
  };
  const getItemPrice = (itemName) => {
    // Replace this with your logic to fetch the price of the item
    const itemPrices = {
      Tea: 12,
      Coffee:15,
      Vada: 8,
      // Add more items as needed
    };
  
    return itemPrices[itemName] || 0; // Return 0 if the item price is not found
  };
  

  return (
    <View style={styles.container}>
      {/* Render bakery items */}
      <BakeryItem itemName="Tea" price={12} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="Coffee" price={15} onQuantityChange={handleQuantityChange} />
      <BakeryItem itemName="Vada" price={8} onQuantityChange={handleQuantityChange} />
      {/* Add more bakery items as needed */}

      {/* Display totals */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Quantity: {calculateTotalQuantity()} units</Text>
        <Text style={styles.totalText}>Total Amount: {calculateTotalAmount()} rs</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#F5F5F5',
      borderRadius: 8,
      marginVertical: 8,
      elevation: 3,
      padding: 16,
      width:'100%',
      display:'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    itemDetails: {
      marginBottom: 10,
    },
    productName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    price: {
      fontSize: 16,
      color: '#555',
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#3498db',
      borderRadius: 4,
      padding: 8,
      marginHorizontal: 4,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    quantity: {
      fontSize: 16,
      marginHorizontal: 8,
      color: '#333',
    },
    totalAmount: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginTop: 10,
    },
  });

export default Drinks;
