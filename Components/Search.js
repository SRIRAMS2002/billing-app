import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // You can use any icon library you prefer

const Search = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.searchBarContainer}>
      <AntDesign
        name="search1"
        size={20}
        color="gray"
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search Your Items..."
        placeholderTextColor="gray"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
});

export default Search;
