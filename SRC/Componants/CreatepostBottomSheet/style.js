import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    bgctr:{
        padding:20, justifyContent: "center", alignItems: "center"
    },
    createpostctr:{ flexDirection: 'row', width:'100%', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 20 },
    createpostctr1:{ flexDirection: 'row', width:'100%', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 10 },
    createpostctr2:{ flexDirection: 'row', width:'100%', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 15  },
    creatposttext:{
        fontSize:20,
        color:'black',
        fontWeight:'600',

    },
    creatposttext2:{
        fontSize:17,
        color:'#F8BB25',
        fontWeight:'800',

    },
    closebtn:{
        borderColor:"black",
        borderWidth:2,
        borderRadius:6
    }

})

export default styles;