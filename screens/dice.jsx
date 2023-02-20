import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';
import { styles,diceStyles } from './styles';

import diceOne from './images/dice1.png';
import diceTwo from './images/dice2.png';
import diceThree from './images/dice3.png';
import diceFour from './images/dice4.png';
import diceFive from './images/dice5.png';
import diceSix from './images/dice6.png';

export const DicePage = ()=>{

    const images = [
        diceOne,
        diceTwo,
        diceThree,
        diceFour,
        diceFive,
        diceSix
    ]
    const rollDice = () =>{
        setDice(Math.floor(Math.random() * 6))
    }
    
    useEffect(() => {
        rollDice();
    }, [])

    const [dice, setDice] = useState("");

    return(
        <View style={diceStyles.main}>
            <TouchableOpacity
            onPress={() =>rollDice()}
            >
            <Image 
            source={images[dice]}
            />
            <Text>
                You rolled a {dice +1}
            </Text>
            </TouchableOpacity>
        </View>
    )
}