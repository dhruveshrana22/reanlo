import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import CustomTabBarButton from './CustomBottomtab';
import HomeScreen from '../SRC/Home/Homescreen';
import SettingsScreen from '../SRC/Home/SettingScreen/Index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Recent from '../SRC/Home/MyBookScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather2 from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather1 from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/Feather';
import DisCoverScreen from '../SRC/Home/DiscoverScreen';
import MyBook from '../SRC/Home/MyBookScreen';
import UserScreen from '../SRC/Home/UserScreen';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useRef } from 'react';
import { BottomSheetContent } from '../SRC/Componants/CreatepostBottomSheet';


const Tab = createBottomTabNavigator();


const BotomTab = () => {
  const bottomSheetRef = useRef(null);

  const openBottomSheet = () => {
    bottomSheetRef.current.open(); // Open the bottom sheet
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        tabStyle: { backgroundColor: '#FFFFFF', },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{

          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
              <FontAwesome name="home" size={24} color={focused ? '#F8BB25' : '#748c94'} />
              {focused && <Text style={{ color: '#F8BB25', fontSize: 16 }}>Home</Text>}
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="DisCover"
        component={DisCoverScreen}
        options={{

          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
              <Feather2 name="compass" size={24} color={focused ? '#F8BB25' : '#748c94'} />
              {focused && <Text style={{ color: '#F8BB25', fontSize: 16 }}>Discover</Text>}
            </View>
          ),
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
              <Feather name="plus-square" size={24} color={focused ? 'white' : 'white'} />
            </View>
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          ),
          headerShown: false,
        }}
      /> */}


      <Tab.Screen
        name="Settings"
        component={MyBook}
        options={{

          tabBarIcon: ({ focused }) => (
            <View style={{ padding: 5, bottom: 5, }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  ...styles.shadow,
                }}
                activeOpacity={1}
                onPress={openBottomSheet} // Call openBottomSheet function on press
              >
                <View style={{ width: 60, height: 60, borderRadius: 35, backgroundColor: '#F8BB25', alignItems: 'center', justifyContent: 'center', borderColor: '#FFFFFF', top: -10, borderWidth: 7 }}>
                  <Feather name="plus-square" size={24} color={'white'} />
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
                    backgroundColor: "rgba(0, 0, 0, 0.5)" // Change the color here
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

            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Recent"
        component={MyBook}
        options={{

          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
              <Feather1 name="book-open" size={24} color={focused ? '#F8BB25' : '#748c94'} />
              {focused && <Text style={{ color: '#F8BB25', fontSize: 16 }}>My Books</Text>}
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="user"
        component={UserScreen}
        options={{

          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
              <AntDesign name="user" size={24} color={focused ? '#F8BB25' : '#748c94'} />
              {focused && <Text style={{ color: '#F8BB25', fontSize: 16 }}>Profile</Text>}
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
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

export default BotomTab;




















// <Tab.Screen
// name="Settings"
// component={SettingsScreen}
// options={{
//   tabBarIcon: ({ focused }) => (
//     <View style={{ alignItems: 'center', justifyContent: 'center', }}>
//       <Feather name="plus-square" size={24} color={focused ? 'white' : 'white'} />
//     </View>
//   ),
//   tabBarButton: (props) => (
//     <>
//       <TouchableOpacity
//         style={{
//           top: -30,
//           justifyContent: 'center',
//           alignItems: 'center',
//           ...styles.shadow,
//         }}
//         activeOpacity={1}
//         onPress={openBottomSheet} // Call openBottomSheet function on press
//       >
//         <View style={{ width: 50, height: 50, borderRadius: 35, backgroundColor: '#F8BB25' }}>
//           {/* {children} */}
//         </View>
//       </TouchableOpacity>
//       <RBSheet
//         ref={bottomSheetRef}
//         closeOnDragDown={true}
//         closeOnPressMask={true}
//         height={425}
//         backdropOpacity={0.5} // Adjust the opacity value as needed
//         customStyles={{
//           wrapper: {
//             backgroundColor: "rgba(0, 0, 0, 0.5)" // Change the color here
//           },
//           container: {
//             borderTopLeftRadius: 10,
//             borderTopRightRadius: 10
//           }
//         }}
//       >
//         {/* Use the BottomSheetContent component with custom text */}
//         <BottomSheetContent title={"Create Post"} onClose={() => bottomSheetRef.current.close()} />
//       </RBSheet>

//     </>
//   ),
//   headerShown: false,
// }}
// />