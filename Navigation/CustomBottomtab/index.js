import React, { useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import { BottomSheetContent } from '../../SRC/Componants/CreatepostBottomSheet';

const CustomTabBarButton = ({ children }) => {
    const bottomSheetRef = useRef(null);

    const openBottomSheet = () => {
        bottomSheetRef.current.open(); // Open the bottom sheet
    };

    return (
        <>
            <TouchableOpacity
                style={{
                    top: -30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...styles.shadow,
                }}
                activeOpacity={1}
                onPress={openBottomSheet} // Call openBottomSheet function on press
            >
                <View style={{ width: 60, height: 60, borderRadius: 35, backgroundColor: '#F8BB25' }}>
                    {children}
                </View>
            </TouchableOpacity>
            <RBSheet
                ref={bottomSheetRef}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={425}
                backdropOpacity={0.5} // Adjust the opacity value as needed
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    container: {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }
                }}
            >
                {/* Use the BottomSheetContent component with custom text */}
                <BottomSheetContent title={"Create Post"} onClose={() => bottomSheetRef.current.close()} />
            </RBSheet>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow: {
        shadowColor: '#F8BB25',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});

export default CustomTabBarButton;
