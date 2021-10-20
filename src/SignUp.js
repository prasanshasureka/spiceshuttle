import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import RadioButton from './RadioButton'
import firebase from 'firebase'
import DatePicker from './DatePicker'
import Spinner from './spinner'

export default class SignUp extends Component{

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        maleOrFemale: 'male',
        Dob: '',
        pass1: '',
        pass2: '',
        error: '',
        loading: false
    }

    radio_props1 = [
        {label: 'Female      ', value: 'female' },
        {label: 'Male      ', value: 'male' },
        //{label: 'Rather Not Tell', value: 'male' }
      ];


    onProceed(){
        
        if (this.state.firstName!='' && this.state.lastName!='' && this.state.phone!='' && this.state.pass1!=''){
            
            if (this.state.pass1===this.state.pass2){
                this.setState({loading: true, error: ''})
                firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass1)
                .then(() => {
                    uid = firebase.auth().currentUser.uid
                    firebase.database().ref('users/' + uid).set({
                        email: this.state.email,
                        phone: this.state.phone,
                        fname: this.state.firstName,
                        lname: this.state.lastName,
                        gender: this.state.maleOrFemale,
                        dob: this.state.Dob,
                        image: 'https://imgur.com/ztGaQUU.jpg',
                        points: 0,
                        upcomingbooking: '',
                        expiredbooking: ''
    
                    }) 
                })
                .catch((error) => {
                    
                    this.setState({loading: false})
                    this.setState({error: error.message})
                    this.clearForm()
                    });
            }else{
                this.setState({error: "Passwords don't match", loading: false})
            }
        }else{
            this.setState({error: 'Fields should not be empty'})
        }
        
    }

    onLoading(){
        if (this.state.loading===false){
            return(
                <Text style={{padding: 15, fontSize: 20, fontWeight: 'bold', color: '#480d0d'}}>
                        SIGN UP
                </Text>
            );
        }else{
            return(
                <Spinner/>
            );
        }

    }

    clearForm(){
        this.setState({
            pass1: '',
            email: '',
            loading: false,
            pass2: ''
        })
    }


    render(){
        return(
            <ScrollView>
                <TextInput
                style={{height: 40, borderColor: '#0002', borderBottomWidth: 1, margin: 15}}
                onChangeText={(text) => this.setState({firstName: text})}
                value={this.state.firstName}
                placeholder={'First Name'}
                >

                </TextInput>
                <TextInput
                style={{height: 40, borderColor: '#0002', borderBottomWidth: 1, margin: 15}}
                onChangeText={(text) => this.setState({lastName: text})}
                value={this.state.lastName}
                placeholder={'Last Name'}
                >
                
                </TextInput>

                <Text style={{fontSize: 15, margin: 20, marginBottom: 0, marginTop: 5}}>
                    Gender: 
                </Text>

                <RadioButton radioProps = {this.radio_props1} value={this.state.maleOrFemale}/>

                

                <View style={{flexDirection: 'row',  margin: 20, borderWidth: 0, justifyContent: 'center', alignItems: 'center', marginBottom: 0}}>
                <Text style={{paddingRight: 10, fontSize: 15, textAlign: 'center'}}>
                        Date of Birth: 
                    </Text>
                <DatePicker/>
                </View>

                <TextInput
                style={{height: 40, borderColor: '#0002', borderBottomWidth: 1, margin: 15}}
                onChangeText={(text) => this.setState({email: text})}
                value={this.state.email}
                keyboardType={'email-address'}
                placeholder={'Email Id'}
                >

                </TextInput>

                <TextInput
                style={{height: 40, borderColor: '#0002', borderBottomWidth: 1, margin: 15}}
                onChangeText={(text) => this.setState({phone: text})}
                value={this.state.phone}
                keyboardType={'numeric'}
                placeholder={'Phone Number'}
                >
                </TextInput>

                <TextInput
                style={{height: 40, borderColor: '#0002', borderBottomWidth: 1, margin: 15}}
                onChangeText={(text) => this.setState({pass1: text})}
                value={this.state.pass1}
                secureTextEntry={true}
                placeholder={'Enter Password'}
                ></TextInput>

                <TextInput
                style={{height: 40, borderColor: '#0002', borderBottomWidth: 1, margin: 15}}
                onChangeText={(text) => this.setState({pass2: text})}
                value={this.state.pass2}
                secureTextEntry={true}
                placeholder={'Confirm Password'}
                ></TextInput>

                <Text style={{color: 'red', margin: 0, fontSize: 15, alignSelf: 'center'}}>
                    {this.state.error}
                </Text>

                <TouchableOpacity style={{margin: 60, backgroundColor: '#ff953e', alignItems: 'center', justifyContent: 'center', elevation: 20, marginTop: 10,  height: 60}}
                onPress={() => this.onProceed()}>
                    {this.onLoading()}
                </TouchableOpacity>

                
            </ScrollView>
        );

    }
}