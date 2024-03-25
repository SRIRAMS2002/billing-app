import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableHighlight,
} from "react-native";
import BakeryItem from './BakeryItem';

const Dinner = ({items }) => {
  const dinnerItems = items.filter((item) => item.type === "dinner");
  const [itemCosts, setItemCosts] = useState({});

  const handleCostChange = (itemName, newCost) => {
    setItemCosts((prevItemCosts) => ({
      ...prevItemCosts,
      [itemName]: newCost,
    }));
  };

  // Calculate total cost
  const totalCost = Object.values(itemCosts).reduce((acc, curr) => acc + curr, 0);

console.log(itemCosts)
console.log(totalCost)

 
  return (
    <View  style={styles.container}>
         {dinnerItems.map((item) => (
        <BakeryItem key={item.id} itemName={item.name} price={item.price} handleCostChange={handleCostChange}/>
      ))}
       <View style={styles.bottomView}>
        <View>
          <Text style={styles.bottomLeft2}>
            Amount: {totalCost}rs
          </Text>
          {/* <Text style={styles.bottomLeft1}>
            Quantity: {calculateTotalQuantity()} units
          </Text> */}
        </View>
        <TouchableHighlight style={styles.submitBtn}>
          <Text style={styles.txtBtn}>Print</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default Dinner
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
  },
  bottomView: {
    position: "absolute",
    height: 80,
    width: "100%",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  submitBtn: {
    width: "40%",
    height: 50,
    borderRadius: 5,
    backgroundColor: "#273BE2",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 55,
  },
  txtBtn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  bottomLeft1: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "400",
  },
  bottomLeft2: {
    fontSize: 20,
    fontWeight: "600",
  },
});