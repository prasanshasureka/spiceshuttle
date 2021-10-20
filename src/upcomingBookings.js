import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React , {Component} from 'react';
import DrawerIcon from './logo/drawerMenu.png'
import BookingCard from './bookingCard'
import firebase from 'firebase'


class UpcomingBooking extends Component {
    constructor(props){
        super(props)
        this.state = {
            bookings : []
        }
    }

    componentWillMount(){
        uid = firebase.auth().currentUser.uid
        firebase.database().ref('users/' + uid + '/upcomingbooking/').on('value', (data) => 
        {   const text = []
            data.forEach((item) => { text.push(item.toJSON()) }) 
            this.setState({bookings: text})
        })
    }

    renderOutletList() {
        return this.state.bookings.map(booking => <BookingCard key={booking.name} booking={booking} navigation={this.props.navigation} /> );
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <View style={style.headerStyle}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} >
                        <Image source={DrawerIcon} style={{height:25, width:25, marginLeft:10}} />
                    </TouchableOpacity>
                    <Text style={style.headerText}>
                        Upcoming Bookings
                    </Text>
                </View>
                <ScrollView>
                {this.renderOutletList()}
                </ScrollView>
            </View>
        );
    }
}

const style = {
    headerStyle:{
        borderWidth:0, 
        height: 50, 
        margin: 0, 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        backgroundColor: '#efebe9', 
        flexDirection: 'row',
        marginBottom : 10
    },
    headerText:{
        fontSize:25, 
        fontWeight: '300', 
        color: 'black', 
        padding: 40
    }
}


export default UpcomingBooking
