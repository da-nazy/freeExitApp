import React from 'react';
import Header from './Components/Header.js';
import Bodyone from './Components/Bodyone.js';
import Getstarted from './Components/Getstarted.js';
import { StyleSheet, Text,View,Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Header/>
    <Bodyone/>
    <Getstarted/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
   paddingTop:40,
   alignItems:'center',
  }

});
