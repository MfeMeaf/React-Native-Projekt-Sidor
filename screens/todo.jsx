import React, { useState, useEffect } from 'react';
import { Image ,ScrollView,SafeAreaView, ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';
import { todoStyles } from './styles';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import TaskItem from './Components/TaskItem';


export const ToDoPage = () =>{
    const [todos, setTodos] = useState([]);
    const [tasks, setTasks] = useState([]);

    const {getItem, setItem} = useAsyncStorage('@task');

    const readItemFromStorage = async() => {
        const item = await getItem();
        let array = JSON.parse(item);
        if(Array.isArray(array) && (array !== null || undefined))
        {
            array.map((elem) => {
                setTodos([...todos, elem]);
                console.log(elem);
            })
        }
    }

    const writeItemToStorage = async newValue => {
        await setItem(newValue);
    }

    const addTodo = (myTodo) =>{
        setTodos([...todos, myTodo]);
        writeItemToStorage(JSON.stringify(myTodo));
    }

    const deleteIndex = (deleteIndex) =>{
        console.log("INDEX:", deleteIndex)
        setTodos(todos.filter((value, index) => index != deleteIndex))
    }

    useEffect(() => {
        readItemFromStorage();
    }, [])

    return(
        <View style={todoStyles.background}>
            <View style={todoStyles.form}>
                <Text style={todoStyles.text}>Todo</Text>
                <TextInput 
                    placeholder="Type text here"
                    onChangeText={text => setTasks(text)}
                />
                <TouchableOpacity style={todoStyles.button}
                onPress={() => {(addTodo(tasks))}}
                > 
                    <Text>Add Todo</Text>
                </TouchableOpacity>
            </View>
            <View style={todoStyles.list}>
            <SafeAreaView style={todoStyles.container}>
            <ScrollView style={todoStyles.scrollView}>
            {todos.map((data, index)=>{
                return(
                    <View key={index}>
                        <TaskItem index={index+1} task={data} deleteTask={() => {deleteIndex(index)}}/>
                    </View>
                )})
            }
            </ScrollView>
            </SafeAreaView>
            </View>
        </View>
    )
}