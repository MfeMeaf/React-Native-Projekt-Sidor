import { StyleSheet, StatusBar,Dimensions} from 'react-native';
export const weatherStyles = StyleSheet.create({
    mainView:{
        backgroundColor: 'rgb(216, 172, 132)',
        height: '100%'
    },
    View:{
        backgroundColor: 'rgb(198, 133, 73)',
        width: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '22%',
        height: '60%',
        borderRadius: 10,
    },
    gobackButton:{
        backgroundColor: 'rgb(190, 137, 87)',
        borderRadius: 5,
        width: '35%',
    },
    buttonText:{
        color:'black',
    },
})
export const todoStyles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: 'rgb(216, 172, 132)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '75%',
        backgroundColor: 'rgb(149, 138, 138)',
        color: 'white',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1.5,
    },
    list:{
        flex: 5,
        width: '75%',
        margin: 50,
        backgroundColor: 'rgb(149, 138, 138)',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        backgroundColor: 'rgb(159, 200, 50)',
        width: '25%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1.5,
    },
    text:{
        color: 'white',
    },
    container: {
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        width: '100%',
      },
      scrollView: {
        marginHorizontal: 20,
      },
});
export const diceStyles = StyleSheet.create({
    button:{
        backgroundColor: 'rgb(149, 162, 174)',
    },
    buttonText:{
        backgroundColor: 'rgb(200, 162, 174)',

    }
})

export const newsStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'rgb(216, 172, 132)'
      },
      scrollView: {
        marginHorizontal: 20,
      },
      news:{
        backgroundColor: 'rgb(198, 133, 73)',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1.5,
        margin: '5%',
        height: 'auto',

      },
    author:{
        fontSize: 30,
        margin: '5%',
    },
    title:{
        fontSize: 15,
        margin: '5%',
    },
    content:{
        fontSize: 14,
        margin: '5%',
    }
})

export const cheatStyle = StyleSheet.create({
    main:{
        backgroundColor: 'rgb(212, 214, 206)',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    buttons:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '40%',
        marginBottom: '5%',
        height: '10%',
        width: '20%',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
})

export const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor: 'rgb(120, 120, 120)',
    },
    buttons:{
        flex:1,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    card: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: '80%',
        marginTop: '40%',
        borderRadius: 20,
        maxHeight: 380,
        paddingBottom: '30%',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginTop: '5%',
        marginBottom: '30%',
        color: 'black',
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: '5%',
    },
    inputs: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10%',
    },  
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingTop: 10,
        fontSize: 16, 
        minHeight: 40,
    },
    button: {
        width: '25%',
        backgroundColor: 'rgb(230, 95, 70)',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'row',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    },
    buttonAlt: {
        width: '80%',
        borderWidth: 1,
        height: 40,
        borderRadius: 50,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    view:{
        flex: 2,
        width: '85%',
        height: 150,
        backgroundColor: 'rgb(230, 95, 70)',
        marginLeft: '7.5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    viewText:{
        color: 'white',
    },
});