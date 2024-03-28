import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 3,
       

    },
    scrcontainer: {
        flex: 1,
        gap:5

    },
    SearchBar:{
        paddingHorizontal:15,
        paddingBottom:15
      },
      ctrimgeindigo:{
       
      },
      containerauto: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
      imgeindigo:{
        height:120,
        width:340,
        borderRadius:10
      },
    textnotificationctr:{
        paddingHorizontal:10,
        
        flexDirection:'row',
        paddingBottom:10

    },
   
    textContainer: {
        paddingLeft: 10,
        flex: 1,
    },
    greetingText: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
    },
    nameText: {
        fontSize: 24,
        fontWeight: '900',
        color: 'black',
    },
    notificationIcon: {
        marginLeft: 10,
    },

})


export default styles;