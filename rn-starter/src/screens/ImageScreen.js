import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

//Use the prop title or other name, can pass value from parent to children
//but need to receive the prop in the children
const ImageScreen = () => {
    return (<View>
        <ImageDetail 
            title="Forest" 
            imageToShow={require('../../assets/forest.jpg')}
            score={3}
        />
        <ImageDetail 
            title="Beach" 
            imageToShow={require('../../assets/beach.jpg')}
            score={4}
        />
        <ImageDetail 
            title="Mountain" 
            imageToShow={require('../../assets/mountain.jpg')}
            score={5}
        />
    </View>);
};

const styles = StyleSheet.create({});

export default ImageScreen;