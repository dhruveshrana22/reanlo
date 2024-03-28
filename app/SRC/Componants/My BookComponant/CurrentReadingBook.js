import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet, ScrollView, ViewPropTypes } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Slider from 'rn-range-slider'; // Import RangeSlider from rn-range-slider
import { BottomSheetContent, UpdateProgressBootomsheet } from '../CreatepostBottomSheet';

export const CurrentReadBook = ({ title2, title1 }) => {
    const [expanded, setExpanded] = useState(false);
    const [sliderValue, setSliderValue] = useState(0); // State to hold slider value
    const secondBottomSheetRef = useRef(null);
    const navigation = useNavigation();
    const handlenavigattocurentread = () => {
        navigation.navigate("Currantread")
    }
    const bottomSheetRef = useRef(null);

    const openBottomSheet = () => {
        bottomSheetRef.current.open(); // Open the bottom sheet
    };
    const openSecondBottomSheet = () => {
        secondBottomSheetRef.current.open();
    };

    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingVertical: 2 }}>
                <View style={{}}>
                    <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.textContainer}>
                        <Text numberOfLines={5} ellipsizeMode="tail" style={styles.text}>
                            {title1}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={handlenavigattocurentread}><Text style={styles.hideText}>{title2}</Text></TouchableOpacity>
                </View>
            </View>

            <View style={styles.imgctr}>
                <Image source={require('../../Image/TopBooks/sh.png')} style={styles.image} />
                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <View style={styles.booktextctr}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.booktitle}>
                                The Weight of Things
                            </Text>
                            <Text style={styles.booktitle2}>
                                Chapter 4 of 8
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={openSecondBottomSheet}>
                                <FontAwesome name="share-square-o" size={20} color="black" style={styles.optionsvertical} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.sliderctn}>
                        <Slider
                            style={{ width: '90%' }}
                            min={0} // Minimum value of the slider
                            max={100} // Maximum value of the slider
                            step={1} // Increment step
                            selectionColor="#F8BB25" // Color of the selected part of the slider
                            blankColor="#808080"
                            thumbColor="blue" // Color of the thumb
                            thumbSize={20} // Size of the thumb
                            renderThumb={() => ( // Define the renderThumb function
                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        source={require('../../Image/thumb.png')} // Provide the path to your image asset
                                        style={{ width: 20, height: 20 }} // Adjust the width and height of the image as desired
                                    />
                                    {/* Display the value of the slider */}
                                    <Text style={{ fontSize: 12, color: 'black' }}>{`${Math.round(sliderValue)}%`}</Text>
                                </View>
                            )}
                            renderRail={() => ( // Define the renderRail function
                                <View style={{ height: 5, backgroundColor: '#808080' }} />
                            )}
                            renderRailSelected={() => ( // Define the renderRailSelected function
                                <View style={{ height: 5, backgroundColor: '#F8BB25' }} />
                            )}
                            onValueChanged={(value) => setSliderValue(value)} // Callback to handle value change
                        />


                    </View>

                    <View style={{ padding: 10, flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity style={styles.updatebutton} onPress={openBottomSheet}>
                            <Text style={styles.updatetext}>
                                Update Progress
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <RBSheet
                ref={bottomSheetRef}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={370}
                backdropOpacity={1} // Adjust the opacity value as needed
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)" // Change the color here
                    },
                    container: {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }
                }}
            >
                {/* Use the BottomSheetContent component with custom text */}
                <UpdateProgressBootomsheet onClose={() => bottomSheetRef.current.close()} />
            </RBSheet>
            <RBSheet
                ref={secondBottomSheetRef}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={425}
                backdropOpacity={1}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)" // Change the color here
                    },
                    container: {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }
                }}
            >
                <BottomSheetContent title={"Share your thoughts"} onClose={() => secondBottomSheetRef.current.close()} />
            </RBSheet>
        </>
    );
};
export const CurrentReadBook2 = ({ title2, title1 }) => {
    const [expanded, setExpanded] = useState(false);
    const [sliderValue, setSliderValue] = useState(0); // State to hold slider value

    const navigation = useNavigation();
    const handlenavigattocurentread = () => {
        navigation.navigate("Currantread")
    }
    return (
        <>


            <View style={styles.imgctr}>
                <Image source={require('../../Image/TopBooks/sh.png')} style={styles.image} />
                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <View style={styles.booktextctr}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.booktitle}>
                                The Weight of Things
                            </Text>
                            <Text style={styles.booktitle2}>
                                Chapter 4 of 8
                            </Text>
                        </View>
                        <View>
                            <FontAwesome name="share-square-o" size={20} color="black" style={styles.optionsvertical} />
                        </View>
                    </View>

                    <View style={styles.sliderctn}>
                        <Slider
                            style={{ width: '90%' }}
                            min={0} // Minimum value of the slider
                            max={100} // Maximum value of the slider
                            step={1} // Increment step
                            selectionColor="#F8BB25" // Color of the selected part of the slider
                            blankColor="#808080"
                            thumbColor="blue" // Color of the thumb
                            thumbSize={20} // Size of the thumb
                            renderThumb={() => ( // Define the renderThumb function
                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        source={require('../../Image/thumb.png')} // Provide the path to your image asset
                                        style={{ width: 20, height: 20 }} // Adjust the width and height of the image as desired
                                    />
                                    {/* Display the value of the slider */}
                                    <Text style={{ fontSize: 12, color: 'black' }}>{`${Math.round(sliderValue)}%`}</Text>
                                </View>
                            )}
                            renderRail={() => ( // Define the renderRail function
                                <View style={{ height: 5, backgroundColor: '#808080' }} />
                            )}
                            renderRailSelected={() => ( // Define the renderRailSelected function
                                <View style={{ height: 5, backgroundColor: '#F8BB25' }} />
                            )}
                            onValueChanged={(value) => setSliderValue(value)} // Callback to handle value change
                        />


                    </View>

                    <View style={{ padding: 10, flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity style={styles.updatebutton}>
                            <Text style={styles.updatetext}>
                                Update Progress
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    booktextctr: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: "row",
        padding: 8,
        justifyContent: 'space-between'
    },
    updatebutton: {
        backgroundColor: '#F8BB25',
        padding: 7,
        borderRadius: 20,
    },
    updatetext: {
        fontSize: 12,
        color: 'black',
        fontWeight: '900'
    },
    sliderctn: {
        flex: 1
    },
    imgctr: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        flexDirection: 'row',
        gap: 8
    },
    hideText: {
        fontSize: 14,
        color: 'black',
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        borderRadius: 10,
        width: 80,
        height: 140,
    },
    textContainer: {
        flex: 1,
    },
    text: {
        fontSize: 16,
        color: 'black',
        fontWeight: '900'
    },
    booktitle: {
        color: 'black',
        fontSize: 16,
        fontWeight: '800'
    },
    booktitle2: {
        color: 'gray',
        fontSize: 13
    }
});

