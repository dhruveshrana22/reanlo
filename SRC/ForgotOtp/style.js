import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
  
   
  },
  OTPtext:{
    fontFamily:'Playfair Display',
    fontSize :30,
    color:'black',
    fontWeight:'700'

  },
  OTPDictext:{ fontSize:20, color:'black',paddingTop:15,fontWeight:'400',
lineHeight:22.5
},

  backarrowctr:{
    paddingTop:30,
   paddingHorizontal:30
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
  txtsmlcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
 paddingVertical:30
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
    fontSize: 20,
    textAlign: 'center',
  },
  lgbtncontainer: {
    paddingTop:10,
    width:'100%',
    paddingHorizontal:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.5, // Adjust the opacity to visually indicate that the button is disabled
    // Add any other styles you want for the disabled button
  },
  
  touchableOpacitylgbtn: {
    width:'100%',
    height:55,
alignItems:'center',
justifyContent:'center',
    backgroundColor: '#F8BB25',
    padding: 10,
    borderRadius: 50,
  },
  loginText: {
    fontSize: 16,   
    color: 'black',
    fontWeight: '700',
  },
  
});

export default styles;