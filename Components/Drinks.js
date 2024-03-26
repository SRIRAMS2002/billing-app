// Drinks.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableHighlight,
} from "react-native";
import BakeryItem from "./BakeryItem";


const Drinks = ({ items }) => {
  const drinkItems = items.filter((item) => item.type === "drinks");

  // const printBill = async () => {
  //   try {
  //     const bluetoothManager = new BluetoothManager();

  //     // Check Bluetooth availability
  //     BluetoothManager.isBluetoothEnabled().then((enabled)=> {
  //       alert(enabled) // enabled ==> true /false
  //   }, (err)=> {
  //       alert(err)
  //   });

  //     // Scan for printers (replace with your printer's MAC address)
  //     const printer = await bluetoothManager
  //       .scanDevices()
  //       .then((devices) =>
  //         devices.find((device) => device.name === "Your Printer Name")
  //       );

  //     if (!printer) {
  //       console.warn("Bluetooth printer not found!");
  //       return;
  //     }

  //     // Connect to the printer
  //     await bluetoothManager.connect(printer.address);

  //     // Create a printer instance
  //     const escposPrinter = new BluetoothEscposPrinter(printer.address);

  //     // Print your bill content here using escposPrinter methods
  //     await escposPrinter.addText("Bakery Billing System\n");
  //     await escposPrinter.addText("Items:\n");
  //     // ... Add item details, quantity, and price using escposPrinter methods
  //     await escposPrinter.addText(`Total: ${totalCost}rs\n`);
  //     await escposPrinter.cutPaper(); // Cut the paper after printing

  //     console.log("Bill printed successfully!");
  //   } catch (error) {
  //     console.error("Error printing bill:", error);
  //   } finally {
  //     // Disconnect from the printer
    
  //   }
  // };

  const [itemCosts, setItemCosts] = useState({});

  const handleCostChange = (itemName, newCost) => {
    setItemCosts((prevItemCosts) => ({
      ...prevItemCosts,
      [itemName]: newCost,
    }));
  };

  // Calculate total cost
  const totalCost = Object.values(itemCosts).reduce(
    (acc, curr) => acc + curr,
    0
  );

  console.log(itemCosts);
  console.log(totalCost);

  return (
    <View style={styles.container}>
      {drinkItems.map((item) => (
        <BakeryItem
          key={item.id}
          itemName={item.name}
          price={item.price}
          handleCostChange={handleCostChange}
        />
      ))}
      <View style={styles.bottomView}>
        <View>
          <Text style={styles.bottomLeft2}>Amount: {totalCost}rs</Text>
          {/* <Text style={styles.bottomLeft1}>
            Quantity: {calculateTotalQuantity()} units
          </Text> */}
        </View>
        <TouchableHighlight style={styles.submitBtn} >
          <Text style={styles.txtBtn}>Print</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Drinks;

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
