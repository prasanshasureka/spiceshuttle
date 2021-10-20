import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React , {Component} from 'react';
import EOLogo from './logo/voucher.png'
import Comedy from './logo/comedy.jpg'
import FoodFest from './logo/foodFestival.jpg'
import LadiesNight from './logo/ladiesNight.jpg'
import LiveMusic from './logo/liveMusic.jpg'
import LiveScreening from './logo/liveScreening.jpg'
import OpenMic from './logo/openMic.jpg'
import SportsScreening from './logo/sportsScreening.jpg'
import firebase from 'firebase'
import EventCard from './eventCard'


class EandO extends Component {

    state = {
        comedy: [],
        ladiesnight : [],
        foodfestival : [],
        livemusic : [],
        livescreening : [],
        openmic : [],
        sports : [],
        outlets: [],
        events: []
        
    }

    componentWillMount(){
        firebase.database().ref('outlets/').on('value', (data) => {
            const comedy= []
            const ladiesnight = []
            const foodfestival = []
            const livemusic = []
            const livescreening = []
            const openmic = []
            const sports = []
            const text = []
            const events = []
            

            data.forEach((item) => { 
                text.push(item.toJSON())
            }) 
            text.forEach((item)=> {
                a= Object.keys( item.event)
                // console.log(a)
                a.forEach((list) => {
                    // console.log(list)
                    events.push(item.event[list])
                })
            })
            console.log(events)
            
            events.forEach((item) => {
                
                if (item.category.includes('Food Festival')){
                    foodfestival.push(item)
                }
                if (item.category.includes('Ladies Night')){
                    ladiesnight.push(item)
                }
                if (item.category.includes('Stand-up Show')){
                    comedy.push(item)
                }
                if (item.category.includes('Sports Screening')){
                    sports.push(item)
                }
                if (item.category.includes('Live Music')){
                    livemusic.push(item)
                }
                if (item.category.includes('Live Screening')){
                    livescreening.push(item)
                }
                if (item.category.includes('Open Mic')){
                    openmic.push(item)
                }
                
            })

            this.setState({outlets: text, foodfestival: foodfestival, ladiesnight: ladiesnight, comedy: comedy, sports: sports, livemusic: livemusic, livescreening: livescreening, openmic: openmic})
            
             
        })
    }
    static navigationOptions={
        tabBarIcon: () => (
            <Image
            source = {EOLogo}
            style={{height: 30, width:30}}
            />
        )
    }

    render(){
        return(
            <View style={{flex: 1, }}>
                <ScrollView style={{marginTop:10}}>
                <View style={style.viewStyle}>
                    <TouchableOpacity 
                    style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen4', {list: this.state.comedy, type: 'event'})} >
                        <View style={style.imageContainer}>
                            <Image
                                source={Comedy}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Stand-up Shows</Text>
                        </View>
                            
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen4', {list: this.state.foodfestival})}>
                        <View style={style.imageContainer}>
                            <Image
                                source={FoodFest}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Food Festivals</Text>
                        </View>
                            
                    </TouchableOpacity>
                </View> 
                <View style={style.viewStyle}>
                    <TouchableOpacity 
                    style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen4', {list: this.state.ladiesnight})}>
                        <View style={style.imageContainer}>
                            <Image
                                source={LadiesNight}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Ladies Night</Text>
                        </View>
                            
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen4', {list: this.state.livemusic})}>

                        <View style={style.imageContainer}>
                            <Image
                                source={LiveMusic}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Live Music</Text>
                        </View>
                            
                    </TouchableOpacity>
                </View> 
                <View style={style.viewStyle}>
                    <TouchableOpacity 
                    style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen4', {list: this.state.livescreening})} >
                        <View style={style.imageContainer}>
                            <Image
                                source={LiveScreening}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Live Screening</Text>
                        </View>
                            
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen4', {list: this.state.openmic})}>
                        <View style={style.imageContainer}>
                            <Image
                                source={OpenMic}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Open Mic</Text>
                        </View>
                            
                    </TouchableOpacity>
                </View> 
                <View style={style.viewStyle}>
                    <TouchableOpacity 
                    style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen4', {list: this.state.sports})} >
                        <View style={style.imageContainer}>
                            <Image
                                source={SportsScreening}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Sports Screening</Text>
                        </View>
                            
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touchableStyle}>
                        <View style={style.imageContainer}>
                            {/* <Image
                                source={FoodFest}
                                style={style.imageStyle} /> */}
                        </View>
                        <View>
                                <Text style={style.textStyle}></Text>
                        </View>
                            
                    </TouchableOpacity>
                </View> 
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
        justifyContent: 'center', 
        backgroundColor: '#efebe9'
    },
    headerText:{
        fontSize:25, 
        fontWeight: '300', 
        color: 'black'
    },
    viewStyle:{
        margin:5, 
        flexDirection:'row',
        marginTop:0,
        //elevation:5
        
    },
    touchableStyle:{
        height:100, 
        width:165, 
        justifyContent:'center', 
        alignItems:'center', 
        borderWidth:0, 
        margin:5,
        marginTop:0, 
        //elevation:2
    },
    imageContainer:{
        position:'absolute',
        backgroundColor:'black',
        //backgroundColor:'rgba(0,0,0,.7)'
    },
    imageStyle:{  
        height:100, 
        width:165, 
        opacity:0.6,
        
    },
    textStyle:{
        textAlign:'center', 
        fontWeight:'200', 
        fontSize:20, 
        color:'white'
    },
    textContainer:{
        backgroundColor:'transparent'
    }

}

console.disableYellowBox = true;

export default EandO
