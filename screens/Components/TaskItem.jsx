import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

export default TaskItem = (props) => {
    return ( 
        <View style={styles.container}>
            <View>
                <Text style={styles.index}>{props.index}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.task}</Text>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <Text style={styles.delete}>X</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    indexContainer:{
        borderRadius: 12,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width:50,
        height: 50,
    },
    index:{
        color: '#fff',
        fontSize: 20,
    },
    taskContainer:{
        border: 12,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        flex:1,
        paddingHorizontal:10,
        paddingVertical: 5,
        minHeight: 50,
    },
    task:{
        color: "#000",
        width: '90%',
        fontSize: 16
    },
    delete:{
        marginLeft: 10,
        color: "#f00",
        fontSize:25,
    }
})