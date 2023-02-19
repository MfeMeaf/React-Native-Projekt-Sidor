import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';
import Pdf from 'react-native-pdf';
import { cheatStyle } from './styles';

export const CheatPage = () =>{
    const [main, setMain] = useState(true);
    const [html, setHtml] = useState(false);
    const [js, setJS] = useState(false);
    const [react, setReact] = useState(false);
    const [css, setCSS] = useState(false);
    const reactSource = { uri: 'https://a.storyblok.com/f/88751/x/59992b46dd/cs-react-native.pdf', cache: true };
    const jsSource = { uri: 'https://toptal-email-assets.s3.amazonaws.com/es6cheatsheet.pdf', cache: true };
    const cssSource = { uri: 'https://www3.cs.stonybrook.edu/~pramod.ganapathi/doc/CSE102/CSE102-CheatSheetCSSLong.pdf', cache: true };
    const htmlSource = { uri: 'https://www.december.com/html/spec/HTML5-Cheat-Sheet.pdf', cache: true };
return(
<View style={cheatStyle.main}>
        {main && <View>
                    <TouchableOpacity
                    style={cheatStyle.buttons}
            onPress={() => (setHtml(true), setMain(false))}>
                    <Text>HTML 5</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={cheatStyle.buttons}
            onPress={() => (setCSS(true), setMain(false))}>
                    <Text>CSS</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={cheatStyle.buttons}
            onPress={() => (setJS(true), setMain(false))}>
                    <Text>Javascript</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={cheatStyle.buttons}
            onPress={() => (setReact(true), setMain(false))}>
                    <Text>React</Text>
            </TouchableOpacity>
        </View>}

        {!main && html && <View>
                        <Pdf
            trustAllCerts={false}
            source={htmlSource}
            onLoadComplete={(numberOfPages,filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page,numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={cheatStyle.pdf}/>
        </View>}

        {!main && js && <View>
                    <Pdf
        trustAllCerts={false}
        source={jsSource}
        onLoadComplete={(numberOfPages,filePath) => {
                console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page,numberOfPages) => {
                console.log(`Current page: ${page}`);
            }}
            onError={(error) => {
                console.log(error);
            }}
            onPressLink={(uri) => {
                console.log(`Link pressed: ${uri}`);
            }}
            style={cheatStyle.pdf}/>
        </View>}

        {!main && react && <View>
            <Pdf
            trustAllCerts={false}
            source={reactSource}
            onLoadComplete={(numberOfPages,filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page,numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
        style={cheatStyle.pdf}/>
        </View>}

        {!main && css && <View>
    <Pdf
    trustAllCerts={false}
    source={cssSource}
    onLoadComplete={(numberOfPages,filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page,numberOfPages) => {
            console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
            console.log(error);
        }}
        onPressLink={(uri) => {
            console.log(`Link pressed: ${uri}`);
        }}
        style={cheatStyle.pdf}/>
    </View>}

</View>)
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         marginTop: 25,
//     },
//     pdf: {
//         flex:1,
//         width:Dimensions.get('window').width,
//         height:Dimensions.get('window').height,
//     }
// });