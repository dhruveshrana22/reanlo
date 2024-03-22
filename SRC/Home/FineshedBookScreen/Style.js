import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F8F8F8',
      borderRadius: 30,
      paddingHorizontal:15
    },
    icon: {
      marginLeft:10,
      marginRight: 10,
    },
    input: {
      flex: 1,
      color: '#333',
    },

    FdateSdatectr:{
       flexDirection: 'row', 
       width:250,
       gap:20,
       flex:1
    },
    finesheddatctr:{
      flex:1,
        flexDirection: 'column' 
    },
    startdatctr:{
      
        flexDirection: 'column' 
    },
    startedtext:{
      color:"gray",
      fontSize:10,
    },
    datetext:{
      fontSize:11,
      color:"black"
    },
    slavebtnctr:{
      borderRadius:20,
      padding:5,
      paddingHorizontal:15,
      flexDirection:'row',
      backgroundColor:"#F8BB25",
      
    },
    slavetext:{
      marginRight:8,
      color:'black',
      fontWeight:'800',
      fontSize:12,
      
    },
    mainctr:{
      paddingTop:40,
      paddingHorizontal:13,
      flex:1
    },
    backarrowctr:{
      paddingBottom:20,
      paddingTop:30,
    
    },
  
    img:{
      alignItems:'center',
      justifyContent:"center",  
          
          width:40,
          height:40,  
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 50,
          padding: 8,
          
        },
        OTPtext:{
          fontFamily:'Playfair Display',
          fontSize :30,
          color:'black',
          fontWeight:'700'
      
        },
  
  });
export default styles  