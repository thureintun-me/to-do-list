import React, { useState } from 'react';
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const InputField = (props)=>{
    const [enterTask,setEnterTask] = useState('');

    const addEnterTask = (task) =>{
        props.addTask(task);
        

    }
    return(
        <View style={styles.inputContainer}>
            <TextInput placeholder={'Enter task'} style={styles.inputTextField} 
            value={enterTask} onChangeText={(task)=>setEnterTask(task)}>

            </TextInput>
            <TouchableOpacity onPress={()=>addEnterTask(enterTask)}>
                <View style={styles.addButton}>
                <MaterialIcons name="post-add" size={24} color="blue" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        inputContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
            position:'absolute',
            bottom:20
        },
        inputTextField:{

            flex:1,
            borderWidth:1,
            borderColor:'#fff',
            height:50,
            marginLeft:20,
            width:50,
            padding:10,
            backgroundColor:'#3E3364'
            

        },
        addButton:{
            
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

export default InputField;