import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform , Button} from 'react-native';
import GetLocation from 'react-native-get-location'
import axios from 'axios';
import { styles } from './screens/styles';

// Other screens import
import { WeatherApp } from './screens/weather';
import { DiceApp } from './screens/dice';
import { NewsApp } from './screens/news';
import { ToDoPage } from './screens/todo';
import { CurrencyPage } from './screens/currency';
import { DicePage } from './screens/dice';
import { CheatPage } from './screens/cheatsheet';

// Nav stuff
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({navigation}) {
    const aston = ['Måndag', 'tisDag', 'Onseyday', 'Torsidag', 'Frirfdag', 'Godisdagen', 'hatarMåndag'];

    const [time, setTime] = useState('');
    const [time2, setTime2] = useState('');
     const [day, setDay] = useState('');
     const [date, setDate] = useState('');
     const [month, setMonth] = useState('');
     const [year, setYear] = useState('');

    const getDate = () =>{  
        setTime(new Date().getHours());
        setTime2(new Date().getMinutes());
        setDay(new Date().getDay());
        setDate(new Date().getDate());
        setMonth(new Date().getMonth() + 1);
        setYear(new Date().getFullYear());
    }

    useEffect(() => {
        setInterval(() =>{
            getDate();
        }, 1000);
    }, [])
    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
    .then(location => {
        setLong(location.longitude);
        setLat(location.latitude);
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    })


    function getNews()
    {
        axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json`)
        .then((response) => {
            setNews(response.data.articles);
        })
        .catch(error =>{
            console.warn(error);
        })
        
    }

    function getCurrency()
    {
        axios.get(`https://open.er-api.com/v6/latest/EUR`)
        .then((response) => {
            setCurrency(response.data.rates.SEK);
        })
        .catch(error =>{
            console.warn(error);
        })

    }

    useEffect(() => {
        getNews();
        getCurrency();
    }, [])

    const [currency, setCurrency] = useState([]);
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");
    const [news, setNews] = useState("");
    return (
        <View style={styles.main}>
                <View style={styles.buttons}>
                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Weather',{lat: lat, long: long})}>
                    <Text style={styles.buttonText}>Weather</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('News', {news: news})}>
                    <Text style={styles.buttonText}>News</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('ToDo')}>
                    <Text style={styles.buttonText}>ToDo</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.buttons}>
                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('currency', {currency:currency})}>
                    <Text style={styles.buttonText}>Currency Exchange</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Dice')}>
                    <Text style={styles.buttonText}>Roll Dice</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('CheatSheet')}>
                    <Text style={styles.buttonText}>CheatSheet</Text>
                </TouchableOpacity>
                </View>
            <View style={styles.view}>
                    <Text style={styles.viewText}>{aston[day-1]}{"\n"}</Text>
                    <Text style={styles.viewText}>{date}/{month}/{year}{"\n"}</Text>
                    <Text style={styles.viewText}>{time}:{time2}{"\n"}</Text>
                </View>
        </View>
    );
  }

  const Stack = createNativeStackNavigator();

const MainScreen = () => {
    return (  
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Weather" component={WeatherApp} />
                <Stack.Screen name="Dice" component={DicePage} />
                <Stack.Screen name="News" component={NewsApp} />
                <Stack.Screen name="ToDo" component={ToDoPage} />
                <Stack.Screen name="currency" component={CurrencyPage} />
                <Stack.Screen name="CheatSheet" component={CheatPage} />
            </Stack.Navigator>
        </NavigationContainer>
       
    );
};

export default MainScreen;