import React from 'react';
import { View, Text, Image } from 'react-native';

const BookTitlesComponent = ({title}) => {
    return (
        <View>
            
                
                    <Text>{title.title}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image source={title.image6} style={{ width: 100, height: 150 }} />
                        <Image source={title.image7} style={{ width: 100, height: 150 }} />
                        <Image source={title.image8} style={{ width: 100, height: 150 }} />
                    </View>
                    
               
          
        </View>
    );
};

export default BookTitlesComponent;
