import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, } from 'react-native';
import InputField from './components/InputField';
import InputItem from  './components/InputItem';

export default function App() {
  const [tasks,setTask] = useState([]);

  const addTask =(task) => setTask([...tasks,{id:Math.random().toString(),value:task}]);
    
  

  const removeTask = (id)=>{
    setTask(tasks.filter((task)=>task.id!==id))
    }
  console.log(tasks);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TODO LIST</Text>

      <FlatList keyExtractor ={(item,index)=>item.id} 
      data={tasks} renderItem={(taskData)=>(
        <InputItem id={taskData.item.id} title={taskData.item.value} removeTask={removeTask}></InputItem>
      )}>

      </FlatList>
      <InputField addTask={addTask}></InputField>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#1E1A3C',
    
  },
  header:{
    marginLeft:20,
    fontSize:30,
    marginTop:40,
    marginBottom:15
  }
});
