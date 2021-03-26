import React from 'react';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View,TouchableOpacity,Button,Image,StyleSheet,Text,Dimensions} from 'react-native';

export default function Login({navigation}){

  const {navigate}=navigation;
  
  return (
      <View style={style.main}>
        
     <View style={style.login} >
     <Text style={style.logTex}>Login</Text>
    <View style={style.inputLayout}>
      <TextInput
      label="Email"
       style={style.udColor}
       underlineColor='#232'
    />
     <Icon  style={style.icon} name="envelope" size={30} color="#9C1C94"/>
   
    </View>
    <View style={style.inputLayout}>
      <TextInput
      label="Password"
       style={style.udColor}
       underlineColor='#232'
       secureTextEntry={true}
    />
     <Icon  style={style.icon} name="lock" size={30} color="#9C1C94"/>
   
    </View>
        

           <TouchableOpacity style={style.but}>
           <Text style={{textAlign:'center',color:'#fff',fontSize:20}}>Login</Text>
           </TouchableOpacity>
      <View style={{display:'flex', flex:1,flexDirection:'row',alignSelf:'center',marginTop:20}}>
        <Text>Haven't register yet?</Text>
        <TouchableOpacity 
        onPress={() => navigate('Register')}><Text style={{color:'#9A1D93',marginLeft:5}}>Register Now</Text></TouchableOpacity>
      </View>
    
     </View>
      </View>
  );
};

const style=StyleSheet.create({
  logTex:{
   fontSize:35,
   textAlign:'center',
   color:'#9C1C94',
   fontWeight:'900',
   marginTop:10,
  },
  but:{
    marginTop:10,
    backgroundColor:'#9A1D93',
    width:'40%',
    justifyContent:'center',
    alignSelf:'center',
    height:50,
   borderRadius:8,
  },

 inputLayout:{
   marginTop:20,
 display:'flex',
 flex:1,
 flexDirection:'row',
 marginLeft:5,
 marginRight:5,
 backgroundColor:'#E9EBE9',

 },

  udColor:{
    color:'#232',
    width:'85%',
    height:'100%',
  },
icon:{
   alignSelf:'center',
   marginLeft:10,

},
  input:{
    height:20,
    width:30,
  },

  login:{ 
    display:'flex',
    justifyContent:'center',
    borderColor:'#232',
    borderWidth:1,
    marginTop:40,
    width:Dimensions.get('window').width/1.1,
    alignSelf:'center',
    borderRadius:3,
    height:350,

  },
  main:{
    display:'flex',
    flex:1,
    height:2,
 
  
  }
})
