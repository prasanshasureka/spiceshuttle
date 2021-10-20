import React, {Component} from 'react'
import {View, ActivityIndicator} from 'react-native'

export default class Spinner extends Component{
    render(){
        return(
            <View style={style.viewStyle}>
                <ActivityIndicator size="large" color='black' />
            </View>
        );
    }
}

const style = {
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}