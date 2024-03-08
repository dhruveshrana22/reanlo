import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    txtemailcontainer: {
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
    },
    checkboxContainer: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 5,
      },
      checkbox: {
        width: 15,
        height: 15,
        // borderWidth: 1,
        // borderColor: 'black',
        // borderRadius: 3,
      },
    
      termsText: {
        fontSize: 15,
        lineHeight: 18,
        fontWeight: '700',
        fontFamily:'Outfit',
        color: 'gray', // Change the text color to a darker shade
      },
      underline: {
        color:'black',
        textDecorationLine: 'underline',
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
        width:'80%',
        color: 'black'
    },
    text: {

        color: '#212121',
        fontSize: 27,
        fontFamily: "Playfair Display",
        fontWeight: '700',
        lineHeight: 39,
    },
    container: {
        paddingTop: 55,
        paddingLeft: 25,
        gap: 10,
        alignItems: 'center',

        position: 'relative',
        flexDirection: 'row',
    },
    lgbtncontainer: {
        paddingTop: 10,
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
    ORcontainer: {
paddingVertical:20,
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default styles