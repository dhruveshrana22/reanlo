import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex:1,
  paddingTop:15
   
  },
 
  


  backarrowctr:{
    paddingBottom:30,
    paddingTop:30,
   paddingHorizontal:20
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

export default styles;