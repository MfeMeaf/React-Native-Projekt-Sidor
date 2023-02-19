import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';
import axios from 'axios';
import { weatherStyles, styles } from './styles';

export const WeatherApp = ({route, navigation})=>{
    const {lat, long} = route.params;
    function getWeather()
    {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=77a8c6b3476e8fe80c4df97d6e4a0a2c`)
        .then((response) => {
            setWeather(response.data);
            setData(true);
        })
        .catch(error =>{
            console.warn(error);
        })
    }

    useEffect(() => {
        getWeather();
    }, [])
    const [weather, setWeather] = useState("");
    const [data, setData] = useState(false);

    return(
        <View style={weatherStyles.mainView}>
            {data && <View style={weatherStyles.View}>
            <Image
            style={{height: 100, width: 100}}
            source={{uri: `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}}
            />
            <Text>
            Location:  {weather.name}{"\n"}
            Temp:  {(weather.main.temp -273.73).toFixed(0)}° C{"\n"}
            Min: {(weather.main.temp_min  -273.73).toFixed(0)}° C{"\n"}
            Max:   {(weather.main.temp_max  -273.73).toFixed(0)}° C{"\n"}
            Wind:  {weather.wind.speed} m/s{"\n"}
            Humidity:  {weather.main.humidity}%{"\n"}
            </Text>

        </View>}
        { !data && 
        <View>
            <Text> Fetching data{"\n"}</Text>
            <TouchableOpacity 
                style={styles.goBackbutton}
                onPress={() => {navigation.goBack()}}>
                    <Text style={styles.buttonText}>Go back</Text>
                </TouchableOpacity>

        </View>
        }
        </View>

    )
}