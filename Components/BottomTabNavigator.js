import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import React from 'react';

const BottomTabNavigator = () => {
  return (
    <View style={styles.bottomView}>
      <View>
      
      <Text  style={styles.bottomLeft2}>{'Total : 528'}</Text>
      <Text  style={styles.bottomLeft1}>{'Quantity : 12 '}</Text>
      </View>
    
      <TouchableHighlight style={styles.submitBtn}>
        <Text style={styles.txtBtn}>Print</Text>
      </TouchableHighlight>
    </View>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  bottomView: {
    position: 'absolute',
    height: 80,
    width: '100%',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
  },
  submitBtn: {
    width: '40%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#273BE2',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:55,
   
  },
  txtBtn: {
    color:'#fff',
    fontSize:16,
    fontWeight:'600',

  },
  bottomLeft1:{
    marginTop:5,
    fontSize:16,
    fontWeight:'400',
  },
  bottomLeft2:{
   
    fontSize:20,
    fontWeight:'600',
  }
});
