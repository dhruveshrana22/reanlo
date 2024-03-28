import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      paddingBottom:10
    },
    libraryText: {
        color: '#343434',
        fontSize: 20,
        fontFamily: 'Outfit',
        fontWeight: '800',
        flex: 1,
        flexWrap: 'wrap',
    },
    additionalBox: {
        padding:10,
        justifyContent:'center',
        paddingLeft: 30,
        height: 'auto',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,

    },
    imageContainer: {
        
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 90, // Adjust according to your image size
        height: 100, // Adjust according to your image size

    },
    imageText: {marginLeft:5,
        fontSize: 13,
        color: '#808080',
    },
    hideContainer: {


    },
    hideText: {
        fontSize: 16,
        color: 'black',
    },
    btnCtr: {



    },

    txtlibry: {
        paddingHorizontal:10,
        
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        height: 29,
        width:'auto',
        backgroundColor: '#F8BB25'

    }
});
export default styles;