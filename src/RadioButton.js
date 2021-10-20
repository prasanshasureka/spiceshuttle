import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import React from 'react'
import {View, Text } from 'react-native'
 
/* var radio_props = [
  {label: 'p             ', value: 'param1' },
  {label: 'param2', value: 'param2' }
]; */
 
export default class RadioButtonClass extends React.Component{
  

  state = {
      value: this.props.value
  }
  render() {
    return (
      <View style={{marginLeft: 50, height: 20, marginTop: 20, marginBottom: 20}}>
        <RadioForm
          radio_props={this.props.radioProps}
          
          initial={0}
          formHorizontal={true}
          onPress={(value) => {this.setState({value:value})}}>
              
          </RadioForm>

         

      </View>
    );
  }
}