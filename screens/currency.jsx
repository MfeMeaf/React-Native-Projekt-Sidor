import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';

export const CurrencyPage = ({route , navigation})=>{
    const {currency} = route.params;

    const [SEK, setSEK] = useState("");
    const [EUR, setEUR] = useState("");

    return(
        <View>
        <Text> SEK to EUR</Text>
         <TextInput
             placeholder='Input amount to convert'
             onChangeText={newValue => setSEK(newValue)}
         />
        <Text></Text>
        <Text>EUR to SEK</Text>
        <TextInput
            placeholder='Input amount to convert'
            onChangeText={newValue => setEUR(newValue)}
        />

        <Text>
            Amount of SEK: {(EUR * currency).toFixed(2)}
            {"\n"}
            Amount of EUR: {(SEK / currency).toFixed(2)}
        </Text>
        </View>

    )
}