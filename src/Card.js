import React, { Component } from 'react';
import { View, Text } from 'react-native';

const Card = (props) => (
    <View style={styles.containerStyle} >{
        props.children
    }</View>
);

const styles = {
    containerStyle: {
        borderWidth: 0,
        borderRadius: 2,
        borderColour: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 0,
        marginBotton: 0
    }
};

export default Card