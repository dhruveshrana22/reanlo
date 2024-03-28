import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    animatedView: {
        position: 'absolute',
        left: 0,
        right: 0,
        backgroundColor: '#FCFFFE',
        padding: 30,
        flex:1,
        bottom:10,
        height:400
      },
    
       loginSuccessfulContainer: {
        alignItems: 'flex-start',
        fontWeight:'600',
        

      },
    
      loginSuccessfulText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
      },
      X:{
        height:25,
        width:25,
        alignItems:'center',
        borderColor:"black",
        borderWidth:2,
        borderRadius:10,
        textAlign:"center",
        justifyContent:'center',
      },
      dec:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        
        alignItems:'center',
        borderColor:"black",
       
        textAlign:"center",
        justifyContent:'center',
      },
      doneButton: { 
        width:'100%',
        height:55,
    alignItems:'center',
    justifyContent:'center',
        backgroundColor: '#F8BB25',
        padding: 10,
        borderRadius: 50,
      },
      doneButtonText: {
        fontSize: 16,   
        color: 'black',
        fontWeight: '700',
      },
  
});

export default styles;