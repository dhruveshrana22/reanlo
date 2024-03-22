
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Share } from 'react-native';

import PostComponent from '../YourFeedComponant';
import dataArray from '../YourFeedComponant/Profiledatas/Profilecomperdata';
import RowComponent from '../YourFeedComponant/ProfileRowcomponant';
import SmalPostComponent from '../YourFeedComponant/smlpostcomponant';

const YourFed = () => {

    const handleOptionsPress = (id) => {
        // Handle press on options for the corresponding item
        console.log('Options pressed for item with ID:', id);
    };
return(
    <View>
      <View style={{}} >
      <PostComponent/>
      </View>
      <View style={{paddingTop:15}}>
            {/* {dataArray.map((item) => (
                <RowComponent
                    key={item.id}
                    image1Source={item.image1Source}
                    text={item.text}
                    image2Source={item.image2Source}
                    onPressOptions={() => handleOptionsPress(item.id)}
                />
            ))} */}
        </View>
        <View>
            
        </View>
    </View>
)

}

export default YourFed;
