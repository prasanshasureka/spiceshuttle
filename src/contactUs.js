import { View, Text, Button, Linking, TouchableOpacity, Image, Dimensions } from 'react-native';
import React , {Component} from 'react';
import Communications from 'react-native-communications';
import DrawerIcon from './logo/drawerMenu.png'
//import { TouchableOpacity } from 'react-native-gesture-handler';
import CallUs from './logo/callUs.png'
import Email from './logo/emailUs.png'
import Whatsapp from './logo/whatsappUs.png'
import Card from './Card'
import CardSection from './CardSection';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const modalHeight = screenHeight/4;


class contactUs extends Component {

    

    render(){
        return(
            <View>
                <View style={style.headerStyle}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} >
                        <Image source={DrawerIcon} style={{height:25, width:25, marginLeft:10}} />
                    </TouchableOpacity>
                    <Text style={style.headerText}>
                        Contact Us
                    </Text>
                </View>
                <Image source={{uri : 'https://imgur.com/rhqYwpT.jpg'}}
                style={{width: screenWidth, height: modalHeight+100}}/>
                <View>
                    <Text style={{paddingTop: 10, fontSize: 20, padding: 30, paddingBottom: 0}}>
                        We are here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can. 
                    </Text>
                </View>
                
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => Communications.phonecall('7003991700',true)}
                        style={{height: 80, justifyContent: 'center', paddingLeft: 20}}> 
                        <View >
                            <Image
                            source={CallUs}
                            style={{height: 35, width: 35}}/>
                        </View>
                        </TouchableOpacity>
                        <Text style={{paddingTop: 28, fontSize: 20, fontWeight: '500', paddingLeft: 30}}>
                            Call Us
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => Communications.email(['harsh.mayank40@gmail.com'],null,null, null, 'Issue')}
                        style={{height: 80, justifyContent: 'center', paddingLeft: 20}}> 
                        <View >
                            <Image
                            source={Email}
                            style={{height: 35, width: 35}}/>
                        </View>
                        </TouchableOpacity>
                        <Text style={{paddingTop: 28, fontSize: 20, fontWeight: '500', paddingLeft: 30}}>
                            Write to us
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => Linking.openURL('whatsapp://send?text=&phone=919163228734')}
                        style={{height: 80, justifyContent: 'center', paddingLeft: 20}}> 
                        <View >
                            <Image
                            source={Whatsapp}
                            style={{height: 35, width: 35}}/>
                        </View>
                        </TouchableOpacity>
                        <Text style={{paddingTop: 28, fontSize: 20, fontWeight: '500', paddingLeft: 30}}>
                            Whatsapp Us
                        </Text>
                    </View>
               
            </View>
        );
    }
}

const style = {
    buttonStyle:{
        borderWidth: 2,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 30,
        marginBottom: 10

    },
    headerStyle:{
        borderWidth:0, 
        height: 50, 
        margin: 0, 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        backgroundColor: '#efebe9', 
        flexDirection: 'row'
    },
    headerText:{
        fontSize:25, 
        fontWeight: '300', 
        color: 'black', 
        padding: 90
    }
    
}

export default contactUs
