import React, { useState, useEffect } from 'react';
import { Image , ImageBackground, View, Text,SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Platform, ScrollView } from 'react-native';
import {mewsStyles, newsStyles, styles } from './styles';

export const NewsApp = ({ route, navigation }) =>{
    const {news} = route.params;
    return(
      <SafeAreaView style={newsStyles.container}>
        <ScrollView style={newsStyles.scrollView}>
            {news.map((data, index)=>{
                return(
        <View style={newsStyles.news} key={index}>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: data.urlToImage,
        }}
      />
        <Text style={newsStyles.author}> 
        Author: {data.author}
        </Text>
        <Text style={newsStyles.title}>
        Title: {data.title}
        </Text>
        <Text style={newsStyles.content}>
        Title: {data.description}
        </Text>
        </View>
        )
    })}
    <TouchableOpacity 
                style={styles.goBackbutton}
                onPress={() => {navigation.goBack()}}>
                    <Text style={styles.buttonText}>Go back</Text>
                </TouchableOpacity>
        </ScrollView>
        </SafeAreaView>
    )
}