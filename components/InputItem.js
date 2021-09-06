import React from 'react';
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



const InputItem = (props)=>{

   
        return(
    <View style={styles.itemContainer}>
        
        <Text style={styles.textContainer}>{props.title}</Text>
       
        
        <View style={styles.deleteButton}>
            <MaterialCommunityIcons name="delete-variant" size={24} color="red" onPress={()=>props.removeTask(props.id)} />
        </View>
    </View>
    )
}

const styles = StyleSheet.create(
    {
        itemContainer:{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-between',
            marginBottom:10,
            
            
            
        },
        textContainer:{
            flex:1,
            borderWidth:1,
            borderColor:'#fff',
            height:50,
            marginLeft:20,
            width:50,
            padding:10,
            backgroundColor:'#3E3364'

        },
        deleteButton:{
            borderWidth:1,
            borderColor:'#fff',
            height:50,
            marginLeft:20,
            width:50,
            padding:10,
            marginRight:20,
            backgroundColor:'#3E3364'
        }
    }
)

export default InputItem;