import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, PanResponder, Dimensions, StatusBar } from 'react-native';
import Login_Ragister_Btn from '../Componants/Login_and_Ragisterbtn';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const introductionScreens = [
  {
    id: 1,
    image: require('../Image/Group2.png'),
    title: 'Discover and Socialize',
    content: 'Stay updated for the latest releases, and discover most recent books.',
  },
  {
    id: 2,
    image: require('../Image/Group1.png'),
    title: 'Large Book Collection',
    content: 'Historical Novels, Adventure, fiction, fantasy, science, education, and others.',
  },
  {
    id: 3,
    image: require('../Image/Group3.png'),
    title: 'Readers Community',
    content: 'Join the readers community that shares your love of books and reading.',
  },
  // Add more screens as needed
];

const Intro4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const handleSlideChange = (direction) => {
    const newIndex = direction === 'right' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < introductionScreens.length) {
      setCurrentIndex(newIndex);
    }
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const { dx } = gestureState;
      if (Math.abs(dx) > 50) {
        handleSlideChange(dx > 0 ? 'left' : 'right');
      }
    },
  });
  const currentScreen = introductionScreens[currentIndex];

  
  return (
    <View style={styles.container} {...panResponder.panHandlers}>
     
     <View>
     <Image style={styles.image} source={require('../Image/Reanlo.png')} />
     </View>
      <View style={styles.absoluteContainer}>
        {/* ... Other absolute-positioned elements */}
     
      <View style={styles.backgroundContainer} >
      </View>
        <View style={styles.buttonsContainer}>
         <Login_Ragister_Btn />
        </View>
        <View style={{ justifyContent:'center',
    alignItems:'center',}}>
        <Image style={styles.largeImage} source={currentScreen.image} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>{currentScreen.title}</Text>
          <View style={{paddingHorizontal:30}}>
          <Text style={styles.subtitle}>{currentScreen.content}</Text>

          </View>         
           <View style={styles.container2}>
          {introductionScreens.map((screen, index) => (
            <View key={screen.id} style={index === currentIndex ? styles.circle : styles.smallCircle} />
          ))}
        </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({

  container2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.05,
  },
  circle: {
    width: 24,
    height: 9,
    backgroundColor: '#F8BB25',
    borderRadius: 30,
    marginRight: 8,
  },
  smallCircle: {
    width: 9,
    height: 9,
    backgroundColor: '#DDDDDD',
    borderRadius: 9999,
    marginRight: 8,
  },


  arrowLeft: {
    position: 'absolute',
    left: 10,
    top: '10%',
    transform: [{ translateY: -25 }], // Adjust based on your design
  },

  arrowRight: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -25 }], // Adjust based on your design
  },
  container: {
    paddingTop:45,
    flex: 1,
    backgroundColor: 'white',
  },
  absoluteContainer: {
    position: 'relative',
    width: '100%',
    height: '70%',
  },
  image: {
    width: 124,
    height: 115,
    position: 'absolute',
    left: 153,
  
  },
  descriptionContainer: {
    height: 70,
    textAlign:'center',
    justifyContent: 'center',
    top: 620,
    alignItems:'center',
  },
  title: {
    marginTop:20,
    textAlign: 'center',
    color: '#252D41',
    fontSize: 24,
    fontFamily: 'Outfit',
    fontWeight: '900',
    lineHeight: 45,
    letterSpacing: 0.2,
  },
  subtitle: {
    textAlign: 'center',
    color: '#252D41',
    fontSize: 16,
    fontFamily: 'Outfit',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  dot: {
    width: 24,
    height: 9,
    backgroundColor: '#F8BB25',
    borderRadius: 30,
  },
  backgroundContainer: {
    width: 334,
    height: 438,
    left: "8%",
    top: 145,
    position: 'absolute',
    backgroundColor: '#FFF8E8',
    borderRadius: 12,
   
  },
  buttonsContainer: {
    width: "100%",
    height: 49,
    top: 740,
    alignItems:'center',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',

  },
  largeImage: {
    justifyContent:'center',
    alignItems:'center',
    height: 373,
    top: 210,
    position: 'absolute',
  },
});

export default Intro4;
