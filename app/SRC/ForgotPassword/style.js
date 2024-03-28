import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    lgbtncontainer: {
        paddingTop: 10,
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ORcontainer: {

        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchableOpacitylgbtn: {
        width: '100%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8BB25',
        padding: 10,
        borderRadius: 50,
    },
    loginText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '700',
    },
    otp: {
        fontSize: 16,
        fontWeight: '700',
        borderBottomWidth: 1,
        borderColor: 'black',
        color: 'black'
    },
    Checkcontainer: {
        width: '100%',
        paddingHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    rememberContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    icon: {
        fontSize: 10,
        marginRight: 8,
        backgroundColor: '#F8BB25',
        borderRadius: 50,
        padding: 5,
    },
    rememberText: {
        color: "black",
        fontWeight: '700',
        fontSize: 16,
    },
    txtemailcontainer: {
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
    },
    ViewtextInput: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: 360,
        height: 49,
        borderRadius: 80,
        borderWidth: 1,
        borderColor: '#8E8383',
        fontSize: 16,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        color: 'black'
    },
    container: {
        width:"100%",
        paddingTop: 55,
        paddingLeft: 25,
        gap: 10,
       

        position: 'relative',
        flexDirection: 'column',
    },
    text: {

        color: '#212121',
        fontSize: 30,
        fontFamily: 'Playfair Display',
        fontWeight: '700',
        lineHeight: 39,
    },
    text2: {

        color: '#212121',
        fontSize: 20,
        fontFamily: 'Playfair Display',
        fontWeight: '400',
        lineHeight: 23,
    },
    image: {
        width: 30,
        height: 30,

    },
});

export default styles;
