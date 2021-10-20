import { View, Text, Image,TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import React , {Component} from 'react';
import Card from './Card'
import CardSection from './CardSection';


export default class BookingCard extends Component{
    constructor(props){
        super(props)
        table = 'Table Booked'
        if (this.props.booking.eventName===''){
            table = 'Table Booked'
        }else{
            table = this.props.booking.eventName
        }
        this.state={
            table: table
        }
    }
    

    render(){
        
        return(
            <View style={{padding: 5}}>
                <Card>
                    <CardSection>
                        <Image
                            source = {{uri : this.props.booking.image}} 
                            style={{height: 80, width:80, margin: 5}}
                        />
                        <View style={{flexDirection: 'column', justifyContent: 'center', paddingLeft: 5}}>
                            <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}> 
                                {this.props.booking.outlet}
                                
                            </Text>
                            <Text style={{color: 'black', fontSize: 13, fontWeight: '100'}}> 
                                
                                {this.state.table}
                                
                            </Text>

                            <Text>
                                {this.props.booking.date // .toString().substring(0,10)
                                }
                            </Text>
                            <Text>
                                Time
                            </Text>
                        </View>
                    </CardSection>
                </Card>
            </View>
        );
    }
}