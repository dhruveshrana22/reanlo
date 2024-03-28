import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the appropriate vector icon library
import styles from './Style';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FinishedBookComp = ({image}) => {
  return (

        <View style={{ width: '100%', height:'auto', }}>
          <View style={{ height: 'auto', flexDirection: 'row' }}>
            <Image
              style={{ width: 87, height: 131, borderRadius:10 }}
              source={image}
            />
            <View style={{ justifyContent: 'space-around', flexDirection: 'row', flex: 1, paddingTop: 35 }}>
              <View style={{ height: 100, width: 200, paddingHorizontal: 10, }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', }}>The Weight of Things</Text>
                <Text style={{ fontSize: 12, color: '#808080', marginVertical: 5 }}>Chapter 4 of 8</Text>
                <Image
                  style={{ width: 101, height: 16, marginVertical: 10 }}
                  source={require("../../Image/Rate4.png")}
                />
              </View>
              <View style={{ flexDirection: 'column', flex: 1 }}>
                <View style={{ flexDirection: 'row', }}>
                  <Text style={{ fontSize: 10, color: 'black', flex: 1 }}>My Tags</Text>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 11, color: '#929292', flex: 1 }}>More</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', gap:5, position:'absolute', top:20,right:10, alignItems:'center'}}>
                  <TouchableOpacity style={{backgroundColor:'#008037',borderRadius:100, height:50, width:50, alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white', fontSize:10}}>
                      Loved!
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor:'#008037',borderRadius:100, height:45, width:45, alignItems:'center',justifyContent:'center'}}>

                  <Text style={{color:'white', fontSize:10}}>
                  Meh
                    </Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal:5 }}>
            <View style={styles.FdateSdatectr}>
              <View style={styles.startdatctr}>
                <Text style={styles.startedtext}>
                  Started on:
                </Text>
                <Text style={styles.datetext} >
                  January 02, 2024
                </Text>
              </View>
              <View style={styles.finesheddatctr}>
                <Text style={styles.startedtext}>
                  Finished on:
                </Text>
                <Text style={styles.datetext} >
                  January 02, 2024
                </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.slavebtnctr}>
                <Text style={styles.slavetext}>
                  Shelves
                </Text>
                <AntDesign name="down" size={16} color="black" style={styles.notificationIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>


  );
};


export default FinishedBookComp;
