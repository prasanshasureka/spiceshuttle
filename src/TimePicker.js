 import React, { Component } from 'react';

import {View, TimePickerAndroid, Text  } from 'react-native'

 
export default class TimePick extends Component {

   
    

  
 
  onOpen(){
    const {action, hour, minute} = TimePickerAndroid.open({
        is24Hour: false, 
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        return(hour, minute);
        
      }
  }
 
   

  render() {
    if (this.props.open === true){
        time = this.onOpen()
    }

    
    return (
      <View>
        
          <Text>
              {this.time}


          </Text>
      </View>
    );
  }
} 