import { View, Text, TouchableOpacity , ScrollView, Image, Dimensions } from 'react-native';
import React , {Component} from 'react';
import Card from './Card';
import CardSection from './CardSection';
import Overlay from 'react-native-modal-overlay';
import {withNavigation } from 'react-navigation'
import AddressCard from './addressCard'


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const modalHeight = screenHeight/2;

class ModalComponent extends Component {
    constructor(props){
        super(props)
        addressList = this.props.outlet.address
        keys = Object.keys(addressList)
        address = []
        keys.forEach((item) => address.push(addressList[item]))
        console.log(addressList, address)
        this.state={
            addresses: address
        }
    }

    /* onNavigate(){
        
        this.props.navigation.navigate(this.props.initial, {outlet: this.props.outlet, close: this.props.onClose, first: this.props.first, second: this.props.second, third: this.props.third})
        
    } */

    renderOutletList() {
        return this.state.addresses.map(address => <AddressCard key={address.direction} address={address} navigation={this.props.navigation} initial={this.props.initial} outlet= {this.props.outlet} onClose= {this.props.onClose} first = {this.props.first} second=  {this.props.second} third={this.props.third }/> );
    }

    
    
    render(){
        return(
            <View>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black', paddingLeft: 5}}>
                    Select Outlet
                </Text>
                <View style={{borderBottomColor: '#0002', borderBottomWidth: 0.5, paddingTop: 5}}/>
                <ScrollView>
                {this.renderOutletList()}
                </ScrollView>
            </View>
        );
    }
}

console.disableYellowBox = true


export default withNavigation(ModalComponent)
