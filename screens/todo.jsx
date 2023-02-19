import React, { useState, useEffect } from 'react';
import { Image ,ScrollView,SafeAreaView, ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';
import { todoStyles } from './styles';

export const ToDoPage = () =>{
    const [task, setTask] = useState([]);
    const [todo, setTodo] = useState([]);

    const addTodo = (myTodo) =>{
        console.log("hi")
        setTodo([...todo, myTodo]);
    }

    const delteIndex = (index) =>{
        console.log(index)
    }

    useEffect(() => {
        addTodo();
    }, [])

    return(
        <View style={todoStyles.background}>
            <View style={todoStyles.form}>
                <Text style={todoStyles.text}>Todo</Text>
                <TextInput 
                    placeholder="Type text here"
                    onChangeText={text => setTask(text)}
                />
                <TouchableOpacity style={todoStyles.button}
                onPress={() => {(addTodo(task))}}
                > 
                    <Text>Add Todo</Text>
                </TouchableOpacity>
            </View>
            <View style={todoStyles.list}>
            <SafeAreaView style={todoStyles.container}>
            <ScrollView style={todoStyles.scrollView}>
            {todo.map((data)=>{
                return(
                    <View>
                    <Text>{data}{"\n"}</Text>
                    <TouchableOpacity
                    onPress={delteIndex()}
                    >
                        <Text>X</Text>
                    </TouchableOpacity>
                    </View>
                )})
            }
            </ScrollView>
            </SafeAreaView>
            </View>
        </View>
    )
}