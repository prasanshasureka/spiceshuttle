import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, Image, TimePickerAndroid} from 'react-native'
import RadioButton from './RadioButton'
// import DatePicker from './DatePicker'
import TimePicker from './TimePicker'
import Clock from './logo/clock.png'
import DatePicker from 'react-native-datepicker'
import firebase from 'firebase'

export default class Confirm extends Component{
    constructor(props){
        super(props)
        firebase.database().ref('outlets').orderByChild('/name').equalTo(this.outlet.name).once('value', (data) => {
            outletkey = 0
            data.forEach((item) => { outletkey=item.key})
            // this.setState({outletKey: outletkey})
            })

        firebase.database().ref('outlets/' + outletkey + '/bookings/').on('value', (data) => {
                const list = []
                data.forEach((item) => { list.push(item.toJSON()) }) 
                key = list.length + 1
                this.setState({bookingKey: key})
            })

        this.state={
            firstName: '',
            lastName: '',
            person: 0,
            selfOrGeuest: 'self',
            time: '',
            date: new Date(),
            open: false,
            hour: '',
            minute: '',
            userkey: null,
            booked: '',
            outletkey: outletkey,
            bookingKey: key
        }
        
    }

    componentWillMount(){
        outlet = this.props.navigation.getParam('outlet')
        uid = firebase.auth().currentUser.uid
        firebase.database().ref('users/' + uid + '/upcomingbooking/').on('value', (data) => 
            {   console.log(uid)
                const text = []
                data.forEach((item) => { text.push(item.toJSON()) }) 
                lastKey = text.length + 1
                this.setState({userkey: lastKey})
            })
    } 

    outlet = this.props.navigation.getParam('outlet')

    makeBooking(){
        this.setState({booked: ''})
        if (this.state.firstName!='' && this.state.lastName!='' && this.state.person!=0){
            uid = firebase.auth().currentUser.uid
            firebase.database().ref('users/' + uid).child('upcomingbooking').child(this.state.userkey).update({
            image: this.outlet.image,
            outlet: this.outlet.name,
            date: this.state.date,
            bookingName: this.state.firstName+' '+this.state.lastName,
            eventName: ''
            })
            firebase.database().ref('outlets/' + this.state.outletkey).child('bookings').child(this.state.bookingKey).update({
            date: this.state.date,
            bookingName: this.state.firstName+' '+this.state.lastName,
            eventName: ''
            })
            this.setState({booked: 'BOOKED', firstName: '',
            lastName: '',
            person: 0,
            selfOrGeuest: 'self',
            time: '',
            date: '',
            open: false,
            hour: '',
            minute: '',
            })

            this.props.navigation.goBack(null);
        }else{
            this.setState({booked: 'Fields should not be empty'})
        }
        
    }

    showTimePicker(){      

         if (this.props.open === true){
            const {action, hour, minute} = TimePickerAndroid.open({
                is24Hour: false, 
              });
              if (action !== TimePickerAndroid.dismissedAction) {
                // return(hour, minute);
                this.setState({hour: hour, minute: minute})
                
              }
        } 
        
        
    }

    radio_props = [
        {label: 'Self                    ', value: 'self' },
        {label: 'Guest', value: 'guest' }
      ];

      

    render(){
        
        return(
            <View>
                <RadioButton radioProps = {this.radio_props} value={this.state.selfOrGeuest}/>
                <TextInput
                style={{height: 40, borderColor: 'grey', borderBottomWidth: 1, margin: 15}}
                onChangeText={(text) => this.setState({firstName: text})}
                value={this.state.firstName}
                placeholder={'First Name'}
                >

                </TextInput>
                <TextInput
                style={{height: 40, borderColor: 'grey', borderBottomWidth: 1, margin: 15}}
                onChangeText={(text) => this.setState({lastName: text})}
                value={this.state.lastName}
                placeholder={'Last Name'}
                >
                
                </TextInput>

                <TextInput
                style={{height: 40, borderColor: 'grey', borderBottomWidth: 1, margin: 15}}
                onChangeText={(text) => this.setState({person: text})}
                value={this.state.person}
                keyboardType={'numeric'}
                placeholder={'Number of Individuals'}
                >
                </TextInput>
                
                <View style={{flexDirection: 'row',  margin: 20, borderWidth: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{paddingRight: 10, fontSize: 15, textAlign: 'center'}}>
                        Select Date: 
                    </Text>

                    <DatePicker
                        style={{width: 200}}
                        date={this.state.date}
                        mode="date"
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
                        
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />
                </View>

                <TouchableOpacity>

                    

                <View style={{flexDirection: 'row',  margin: 32, borderWidth: 0, justifyContent: 'flex-start', alignItems: 'center'}}>
                    <Text style={{paddingRight: 30, fontSize: 15, textAlign: 'center'}}>
                        Select Time: 
                    </Text>
                    <Image source={Clock} style={{height: 35, width: 35, paddingLeft: 20}}/>
                    
                    {/* insert time picker */}

                </View>
                  
                </TouchableOpacity>
                <Text style={{alignSelf: 'center', fontSize: 15, color: 'red'}}>
                    {this.state.booked}
                </Text> 
                <TouchableOpacity style={{margin: 60, backgroundColor: '#ff953e', alignItems: 'center', justifyContent: 'center', elevation: 10}} onPress={() => this.makeBooking()}>
                    <Text style={{padding: 15, fontSize: 20, fontWeight: 'bold', color: '#480d0d'}}>
                        BOOK NOW
                    </Text>
                </TouchableOpacity>
                 
                
                
            </View>
        );
    }
}
