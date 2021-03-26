import React from 'react';
import Header from './Header.js';
import Bodyone from './Bodyone.js';
import Getstarted from './Getstarted.js';
import showcase_gs from '../../assets/image/showcase_gs.png';
import {Image, StyleSheet,View,ScrollView,Dimensions} from 'react-native';


export default  function Welcomepage({navigation}){
  //console.log(navigation);
return(
    <ScrollView  contentContainerStyle={styles.container}>
     <Header/>
    <Bodyone/>
    
    <Getstarted navigation={navigation}
      />
    <Image  source={showcase_gs} style={styles.image}/>
    </ScrollView>
    
)
}
const styles = StyleSheet.create({
    container: {
      display:'flex',
      flexDirection:'column',
     paddingTop:40,
     alignItems:'center',
     height:Dimensions.get('window').height,
    },
    
    image:{
      marginTop:15,
      width:Dimensions.get('window').width/1.2,
      height:250,
    }
  });
  