import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
 
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date: ''}
  }
 
  render(){
    return (
      <DatePicker
        
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        //placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2019-01-01"
        maxDate="2019-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 20,
            marginRight: 10
          },
          dateInput: {
            marginLeft: 58,
            borderWidth: 0, 
            
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

      
    )
  }
}