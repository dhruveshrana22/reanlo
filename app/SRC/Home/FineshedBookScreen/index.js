import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Style';
import FinishedBookComp from './FinishedBookComp';
import ArrowCompo from '../../Componants/Arrowcompo';

const FineshedScreen = () => {
  const data = {
    image: require('../../Image/TopBooks/sh.png'),
    image2: require("../../Image/sandra.png"),
    image3: require("../../Image/theweight.png"),

  }

  return (

    <>
      <View style={styles.mainctr}>
        <ArrowCompo name={'Finished Reading'}/>

        <ScrollView style={{}}>
          <View style={{ gap: 30 ,flex:1}}>

            <FinishedBookComp image={data.image2} />
            <FinishedBookComp image={data.image} />
            <FinishedBookComp image={data.image3} />
            <FinishedBookComp image={data.image2} />
            <FinishedBookComp image={data.image} />
          </View>
        </ScrollView>
      </View>
    </>





  );
};


export default FineshedScreen;
