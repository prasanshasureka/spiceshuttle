import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import firebase from 'firebase'
import Spinner from './spinner'

export default class Password extends Component{
    constructor(props){
        super(props);
        const email = this.props.navigation.getParam('email')
        console.log(email)
        this.state={
            email: email,
            password: '',
            error: '',
            loading: false
        }
    }

    onProceed(){
        this.setState({loading: true, error: ''})
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            this.clearForm()
             
        })
        .catch((error) => {
            this.setState({error: error.message})
            this.clearForm()  
        });
        
    }

    onLoading(){
        if (this.state.loading===false){
            return(
                <Text style={{padding: 15, fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                        LOG IN
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
            password: '',
            loading: false
        })
    }

    render(){
        
        return(
            <View style={{marginTop: 200}}>
                <TextInput
                style={{height: 40, borderColor: '#0002', borderBottomWidth: 1, margin: 15}}
                onChangeText={(text) => this.setState({password: text})}
                value={this.state.password}
                placeholder={'Enter Password'}
                ></TextInput>

                <Text style={{color: 'red', margin: 0, fontSize: 10, alignItems: 'center', justifyContent: 'center'}}>
                    {this.state.error}
                </Text>

                <TouchableOpacity style={{margin: 40, backgroundColor: '#ff8a65', alignItems: 'center', justifyContent: 'center', elevation: 20}}
                onPress={() => this.onProceed()}>
                    {this.onLoading()}
                </TouchableOpacity>

            </View>
        );

    }
}