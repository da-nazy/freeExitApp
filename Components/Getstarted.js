import React from 'react';
import logo from '../assets/image/freexitlogo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text,StyleSheet,View,Image,Dimensions,TouchableOpacity} from 'react-native';

export default function Getstarted() {
   
    return (
       
           <TouchableOpacity style={style.btnhead} >
             <View style={style.mbody}>
                 <Text style={style.textbdy}>GET STARTED</Text>
                 <Icon  style={style.icon} name="chevron-right" size={15} color="#fff"/>
             </View>
           </TouchableOpacity>
        
    )
};

const style=StyleSheet.create({
    btnhead:{
        
        backgroundColor:'#9A1D93',
        width:Dimensions.get('window').width/1.3,
        height:45,
        borderRadius:8,
        marginTop:45,
        marginLeft:-20,
    },
    textbdy:{
        color:'#fff',
        fontSize:20,
    },
    mbody:{
        flex:1,
        display:'flex',
        flexDirection:'row',
    
        justifyContent:'center',
        padding:5
    },
    icon:{
        marginTop:8,
        marginLeft:8,
    }
});
