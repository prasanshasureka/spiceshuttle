import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import React , {Component} from 'react';
import Card from './Card'
import CardSection from './CardSection';
import Overlay from 'react-native-modal-overlay';
import ModalComponent from './modal';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const modalHeight = screenHeight/2;

export default class ExploreOutlet extends Component{

    constructor(props){
        super(props)
        addressList = this.props.outlet.address
        keys = Object.keys(addressList)
        address = []
        keys.forEach((item) => address.push(addressList[item]))
        console.log(addressList, address)
        this.state={
            modalVisible: false,
            addresses: address
        }
    }

   onClose = () => {
       this.setState({modalVisible: false})
   }

   onPress = () => {
        if (this.state.addresses.length===1){
            this.props.navigation.navigate(this.props.initial, {outlet: this.props.outlet, close: this.onClose, first: this.props.first, second: this.props.second, third: this.props.third, address: this.state.addresses[0]})

        }else{
            this.setState({modalVisible: true})
        }
    }

    
    render(){
        
        return(
            <View>
                <TouchableOpacity style={{padding:5}} onPress={() => this.onPress()}>

                <Card>
                    <CardSection>
                        <Image
                            source = {{uri : this.props.outlet.image}} 
                            style={{height: 60, width:80, margin: 5}} />
                        <View style={{flexDirection: 'column', justifyContent: 'center', paddingLeft: 5}}>
                            <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}> 
                                {this.props.outlet.name} 
                            </Text>
                            <Text>
                                {this.props.outlet.cuisine} 
                            </Text>
                            <Text>
                                Price for two: {this.props.outlet.price}
                            </Text>
                        </View>
                    </CardSection>
                </Card>
                </TouchableOpacity>
                <Overlay visible={this.state.modalVisible}  closeOnTouchOutside onClose={this.onClose}       containerStyle= {{}}
                    childrenWrapperStyle= {{backgroundColor: 'white', height: modalHeight, width:screenWidth-40,marginTop: modalHeight,}}
                    animationType = {'slideInUp'}
                    easing = {'fast'} >
                        
                        <ModalComponent navigation={this.props.navigation} outlet={this.props.outlet} onClose={this.onClose} initial = {this.props.initial}
                                first = {this.props.first} second = {this.props.second} third = {this.props.third}/>
                            
                </Overlay>
                
            </View>
        );
    }
}