import React from 'react';
import {StyleSheet,View,Text,Dimensions} from 'react-native';
export default function Bodyone(){
    return(
        <View>
                <Text style={style.headText}>
                    Create Delivery Tracking
                </Text>

                <Text style={style.headbody}>
                Lorem ipsum dolor ametn consetetur adispsicing elit. 
                Bealea ilum saepe fuga maxime  ratus repillendux minus 
                militia inventore archietdto culpa!
                </Text>
        </View>
    )
}
 const style=StyleSheet.create({

     headText:{
        color:'#9A1D93',
        fontSize:43,
        fontWeight:'900',
        marginTop:30,
        marginLeft:15,
        marginRight:12,
        paddingLeft:10,
     },

     headbody:{
     fontSize:20,
     marginLeft:35,
     paddingTop:10,
     width:Dimensions.get('window').width/1.2,
     }

 })