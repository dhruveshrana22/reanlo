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


const Tab = createBottomTabNavigator();


const BotomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center',}}>
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
            <View style={{ alignItems: 'center', justifyContent: 'center',}}>
             <Feather2 name="compass" size={24} color={focused ? '#F8BB25' : '#748c94'} />
             {focused && <Text style={{ color: '#F8BB25', fontSize: 16 }}>Discover</Text>}
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
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
      />
      
      <Tab.Screen
        name="Recent"
        component={MyBook}
        options={{
            
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center',  }}>
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
            <View style={{ alignItems: 'center', justifyContent: 'center',}}>
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
  
  shadow: {
    shadowColor: '#7f5df0',
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
