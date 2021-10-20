import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React , {Component} from 'react';
import Logo from './logo/voucher.png'
import Drinks from './logo/2drinks.jpg'
import Food from './logo/2food.jpg'
import HappyHour from './logo/happyHour.jpg'
import Pocket from './logo/pocketFriendly.jpg'
import Super from './logo/superValue.jpg'
import firebase from 'firebase'

export default class Offers extends Component {
    state = {
        drinks: [],
        food : [],
        supervalue : [],
        happyhour : [],
        pocket : [],
        text : [],
        
        
    }

    componentWillMount(){
        firebase.database().ref('outlets/').on('value', (data) => {
            const drinks= []
            const food = []
            const supervalue = []
            const happyhour = []
            const pocket = []
            const text = []
            
            data.forEach((item) => { 
                text.push(item.toJSON())
            }) 
            
            text.forEach((item) => {
                
                if (item.offer.includes('1:1 Food')){
                    food.push(item)
                }
                if (item.offer.includes('2:2 Drinks')){
                    drinks.push(item)
                }
                if (item.offer.includes('Super Value Offer')){
                    supervalue.push(item)
                }
                if (item.offer.includes('Happy Hour')){
                    happyhour.push(item)
                }
                if (item.offer.includes('Pocket Friendly')){
                    pocket.push(item)
                }
            })

            this.setState({text: text, food: food, drinks: drinks, supervalue: supervalue, happyhour: happyhour, pocket: pocket})
            
             
        })
    }
    render(){
        return(
            <View style={{flex: 1}}>
               <ScrollView style={{marginTop:10}}> 
                <View style={style.viewStyle}>
                    <TouchableOpacity 
                    style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen4', {list: this.state.drinks, type: 'explore', initial: 'screen19', first: 'screen23', second: 'screen24', third: 'screen25'})} >
                        <View style={style.imageContainer}>
                            <Image
                                source={Drinks}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>2:2 Drinks</Text>
                        </View>
                            
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen4', {list: this.state.food, type: 'explore', initial: 'screen19', first: 'screen23', second: 'screen24', third: 'screen25'})}>
                        <View style={style.imageContainer}>
                            <Image
                                source={Food}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>1:1 Food</Text>
                        </View>
                            
                    </TouchableOpacity>
                </View> 
                <View style={style.viewStyle}>
                    <TouchableOpacity 
                    style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen4', {list: this.state.happyhour, type: 'explore', initial: 'screen19', first: 'screen23', second: 'screen24', third: 'screen25'})} >
                        <View style={style.imageContainer}>
                            <Image
                                source={HappyHour}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Happy Hour</Text>
                        </View>
                            
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen4', {list: this.state.pocket, type: 'explore', initial: 'screen19', first: 'screen23', second: 'screen24', third: 'screen25'})}>
                        <View style={style.imageContainer}>
                            <Image
                                source={Pocket}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Pocket Friendly</Text>
                        </View>
                            
                    </TouchableOpacity>
                </View> 
                <View style={style.viewStyle}>
                    <TouchableOpacity 
                    style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen4', {list: this.state.supervalue, type: 'explore', initial: 'screen19', first: 'screen23', second: 'screen24', third: 'screen25'})} >
                        <View style={style.imageContainer}>
                            <Image
                                source={Super}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Super Value Offers</Text>
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


