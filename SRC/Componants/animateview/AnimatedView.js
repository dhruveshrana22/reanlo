// AnimatedView.js
import React from 'react';
import { View, Text, TouchableOpacity, Animated, Image } from 'react-native';
import styles from './Style'; // Make sure to import the styles or adjust the styles as needed

const AnimatedView = ({ animatedValue, handleDone }) => {
    return (
        <Animated.View
            style={[
                styles.animatedView,
                {
                    transform: [
                        {
                            translateY: animatedValue.interpolate({
                                inputRange: [0, 1.45],
                                outputRange: [500, 0],
                            }),
                        },
                    ],
                },
            ]}
        >


            <LoginSuccessfulView handleDone={handleDone} />
            <View style={{ top: 190 }}>
                <Text style={styles.dec}>
                    You are now securely logged in to your account. Explore and enjoy our services!
                </Text>
                <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
                    <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
            </View>

        </Animated.View>
    );
};

const LoginSuccessfulView = ({ handleDone }) => {
    return (
        <View style={styles.loginSuccessfulContainer}>
            <View style={{ position: 'absolute', alignItems: 'center', bottom: 30,width:'100%'  }}>
                <Image source={require('../../Image/ring.png')} style={{ height: 110, width: 100,alignItems:'center' }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

                <Text style={styles.loginSuccessfulText}>Login Successful!</Text>
                <TouchableOpacity style={styles.X} onPress={handleDone}>
                    <Text style={{ fontSize: 15, fontWeight: '600', color: 'black' }} >
                        X
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AnimatedView;
