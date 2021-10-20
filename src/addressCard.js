import { View, Text, TouchableOpacity} from 'react-native';
import React , {Component} from 'react';


export default class AddressCard extends Component{

    onNavigate(){
        
        this.props.navigation.navigate(this.props.initial, {outlet: this.props.outlet, close: this.props.onClose, first: this.props.first, second: this.props.second, third: this.props.third, address: this.props.address})
        
    }

    render(){
        return(
            <TouchableOpacity style={{padding:10, width: 300, justifyContent: 'flex-start'}} 
            onPress = {() => this.onNavigate()}>
            
                    
                        
                        <View style={{flexDirection: 'column', paddingLeft: 0, justifyContent: 'flex-start'}}>
                            <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}> 
                                {this.props.address.locality}
                                
                            </Text>

                            <Text>
                                {this.props.address.line1}
                            </Text>
                            <Text>
                            {this.props.address.line2}
                            </Text>
                        </View>
                    
                
                </TouchableOpacity>
        );
    }
}