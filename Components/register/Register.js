import React, {useState} from 'react';

import {CheckBox,View,TouchableOpacity,Text,StyleSheet,Dimensions,ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';
export default function Register({navigation}){
   const[isSelected,setSelection]=useState(false);
    return (
        <ScrollView contentContainerStyle={style.container}> 
             <View style={style.main}>
        <View style={style.login}>
        <Text style={style.logTex}>Register</Text>
        <View style={style.inputLayout}>
         <TextInput
         label="Surname:"
          style={style.udColor}
          underlineColor='#232'
       />
    
       </View>
       <View style={style.inputLayout}>
         <TextInput
         label="Firstame:"
          style={style.udColor}
          underlineColor='#232'
       />
       
    
       </View>
       <View style={style.inputLayout}>
         <TextInput
         label="Phone:"
          style={style.udColor}
          underlineColor='#232'
       />
       
    
       </View>
       <View style={style.inputLayout}>
         <TextInput
         label="Email"
          style={style.udColor}
          underlineColor='#232'
       />
       

       </View>
       <View style={style.inputLayout}>
         <TextInput
         label="Password"
          style={style.udColor}
          underlineColor='#232'
          secureTextEntry={true}
       />
  
      
       </View>
       <View style={style.inputLayout}>
         <TextInput
         label="Confirm Password:"
          style={style.udColor}
          underlineColor='#232'
       />
          </View>

         <View style={style.tc}>

         <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={style.checkbox}
        />
        <Text>I agree to the </Text>
        <TouchableOpacity><Text style={{color:'#9C1C94'}}>terms and conditions.</Text></TouchableOpacity>
         </View>
              <TouchableOpacity style={style.but}>
              <Text style={{textAlign:'center',color:'#fff',fontSize:20}}>Register</Text>
              </TouchableOpacity>
         <View style={{display:'flex', flex:1,flexDirection:'row',alignSelf:'center',marginTop:20}}>
           <Text>Already register?</Text>
           <TouchableOpacity  onPress={() => console.log('login')}
         ><Text style={{color:'#9A1D93',marginLeft:5}}>Login</Text></TouchableOpacity>
         </View>
       
        </View>
         </View>
        </ScrollView>
       
    )
}

const style=StyleSheet.create({
    checkbox:{
      marginBottom:15,
      paddingTop:0,
      marginTop:0,
    },
     tc:{
        display:'flex',
        flexDirection:'row',
        marginTop:10,
        alignSelf:'center',
       
       
     },
    container:{
        display:'flex',
        flexDirection:'column',
       alignItems:'center',
       height:Dimensions.get('window').height,
    },
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
     borderRadius:25,
    },
  
   inputLayout:{
     marginTop:20,
   display:'flex',
   flex:1,
   flexDirection:'column',
   marginLeft:5,
   marginRight:5,
   backgroundColor:'#E9EBE9',
  
   },
  
    udColor:{
      color:'#232',
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
      width:Dimensions.get('window').width/1.1,
      alignSelf:'center',
      borderRadius:3,
      height:620,
  
    },
    main:{
      display:'flex',
      flex:1,
    
    }
  })
  