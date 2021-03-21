import React from 'react';
import logo from '../assets/image/freexitlogo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text,StyleSheet,View,Image,Dimensions,TouchableOpacity} from 'react-native';

export default function Header() {
   
    return (
       
            <View style={style.header}>
            <Image source={logo} style={style.img} />
            <Text style={style.text}>FREEXIT APP</Text>
            <TouchableOpacity  style={style.drop}>
                <Icon name="bars" size={30} color='#9A1D93'/>
            </TouchableOpacity>
            </View>
        
    )
};

const style=StyleSheet.create({
    header:{
        display:'flex',
        width:Dimensions.get('window').width,
        borderBottomWidth:1,
       borderColor:'#D3D4D8',
       paddingLeft:15,
       paddingTop:20,
       paddingBottom:5,
       flexDirection:'row',
       height:70,
    },
    img:{
        width:60,
        height:35,
       marginLeft:10,
    
    },
    text:{
        fontSize:20,
        color:'#9A1D93',
        flex:2,
         textAlign:'center',
    },

    drop:{
     paddingRight:15,  
    }
});
