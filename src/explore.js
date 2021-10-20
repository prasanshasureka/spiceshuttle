import { View, Text, Image, ImageBackground, ScrollView } from 'react-native';
import React , {Component} from 'react';
import Logo from './logo/explore.png';
import Card from './Card'
import CardSection from './CardSection'
import Bar from './logo/bar.jpg'
import Brunch from './logo/brunch.jpg'
import Buffet from './logo/buffet.jpg'
import Cafe from './logo/cafe.jpg'
import casualDining from './logo/casualDining.jpg'
import Dessert from './logo/dessert.jpg'
import Dhaba from './logo/dhaba.jpg'
import fineDining from './logo/fineDining.jpg'
import fastFood from './logo/fastFood.jpg'
import Lounge from './logo/lounge.jpg'
import NightLife from './logo/nightLife.jpg'
import Rooftop from './logo/rooftop.jpg'
import { TouchableOpacity } from 'react-native-gesture-handler';
import vegan from './logo/vegan.jpg'
import bakery from './logo/bakery.jpg'
import firebase from 'firebase'

class Explore extends Component {

    state = {
        outlets: [],
        bar : [],
        brunch : [],
        bakery : [],
        buffet : [],
        cafe : [],
        casual : [],
        dessert : [],
        dhaba : [],
        fast : [],
        fine : [],
        lounge : [],
        nightLife : [],
        roofTop : [],
        vegan : [],
    }

    componentWillMount(){
        firebase.database().ref('outlets/').on('value', (data) => {
            const text = []
            const bar = []
            const brunch = []
            const bakery = []
            const buffet = []
            const cafe = []
            const casual = []
            const dessert = []
            const dhaba = []
            const fast = []
            const fine = []
            const lounge = []
            const nightLife = []
            const roofTop = []
            const vegan = []
            // const outlets= []

            data.forEach((item) => { 
                text.push(item.toJSON())
            }) 
            
            
            text.forEach((item) => {
                if (item.category.includes('Bar')){
                    bar.push(item)
                }
                if (item.category.includes('Brunch')){
                    brunch.push(item)
                }
                if (item.category.includes('Bakery')){
                    bakery.push(item)
                }
                if (item.category.includes('Buffet')){
                    buffet.push(item)
                }
                if (item.category.includes('Cafe')){
                    cafe.push(item)
                }
                if (item.category.includes('Casual Dining')){
                    casual.push(item)
                }
                if (item.category.includes('Dessert')){
                    dessert.push(item)
                }
                if (item.category.includes('Dhaba')){
                    dhaba.push(item)
                }
                if (item.category.includes('Fast Food')){
                    fast.push(item)
                }
                if (item.category.includes('Fine Dining')){
                    fine.push(item)
                }
                if (item.category.includes('Lounge')){
                    lounge.push(item)
                }
                if (item.category.includes('Night Life')){
                    nightLife.push(item)
                }
                if (item.category.includes('Roof Top')){
                    roofTop.push(item)
                }
                if (item.category.includes('Vegan')){
                    vegan.push(item)
                }
            })

            this.setState({outlets: text, bakery: bakery, bar: bar, brunch: brunch, buffet: buffet, cafe: cafe, casual: casual, dessert: dessert, dhaba: dhaba, fast: fast, fine: fine, lounge: lounge, nightLife: nightLife, roofTop: roofTop, vegan: vegan})
            // console.log(text)
            // console.log(lounge)
            // console.log(vegan)
             
        })
    }

    render(){

        return(
            <View style={{flex: 1}}> 
                <View style={style.headerStyle}>
                    <Text style={style.headerText}>
                        Explore
                    </Text>
                </View>
                <ScrollView style={{backgroundColor:'white'}}
                >
            
                <View style={style.viewStyle}>
                    <TouchableOpacity 
                    style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen2', {list: this.state.bar, type: 'explore', initial: 'screen16', first: 'screen20', second: 'screen21', third: 'screen22'})} >
                        <View style={style.imageContainer}>
                            <Image
                                source={Bar}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Bar</Text>
                        </View>
                            
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen2', {list: this.state.brunch, type: 'explore', initial: 'screen16', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                        <View style={style.imageContainer}>
                            <Image
                                source={Brunch}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Brunch</Text>
                        </View>
                            
                    </TouchableOpacity>
                </View> 
                <View style={style.viewStyle}>
                    <TouchableOpacity style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen2', {list: this.state.buffet, type: 'explore', initial: 'screen16', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                        <View style={style.imageContainer}>
                            <Image
                                source={Buffet}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Buffet</Text>
                        </View>
                            
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen2', {list: this.state.cafe, type: 'explore', initial: 'screen16', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                        <View style={style.imageContainer}>
                            <Image
                                source={Cafe}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Cafe</Text>
                        </View>
                            
                    </TouchableOpacity>
                </View> 
                <View style={style.viewStyle}>
                    <TouchableOpacity style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen2', {list: this.state.casual, type: 'explore', initial: 'screen16', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                        <View style={style.imageContainer}>
                            <Image
                                source={casualDining}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Casual Dining</Text>
                        </View>
                            
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen2', {list: this.state.dessert, type: 'explore', initial: 'screen16', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                        <View style={style.imageContainer}>
                            <Image
                                source={Dessert}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Dessert</Text>
                        </View>
                            
                    </TouchableOpacity>
                </View> 
                <View style={style.viewStyle}>
                    <TouchableOpacity style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen2', {list: this.state.dhaba, type: 'explore', initial: 'screen16', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                        <View style={style.imageContainer}>
                            <Image
                                source={Dhaba}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Dhaba</Text>
                        </View>
                            
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen2', {list: this.state.fine, type: 'explore', initial: 'screen16', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                        <View style={style.imageContainer}>
                            <Image
                                source={fineDining}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Fine Dining</Text>
                        </View>
                            
                    </TouchableOpacity>
                </View> 
                <View style={style.viewStyle}>
                    <TouchableOpacity style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen2', {list: this.state.lounge, type: 'explore', initial: 'screen16', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                        <View style={style.imageContainer}>
                            <Image
                                source={Lounge}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Lounge</Text>
                        </View>
                            
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen2', {list: this.state.nightLife, type: 'explore', initial: 'screen16', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                        <View style={style.imageContainer}>
                            <Image
                                source={NightLife}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Night Life</Text>
                        </View>
                            
                    </TouchableOpacity>
                </View> 
                <View style={style.viewStyle}>
                    <TouchableOpacity style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen2', {list: this.state.roofTop, type: 'explore', initial: 'screen16', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                        <View style={style.imageContainer}>
                            <Image
                                source={Rooftop}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Rooftop</Text>
                        </View>
                            
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen2', {list: this.state.fast, type: 'explore', initial: 'screen16', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                        <View style={style.imageContainer}>
                            <Image
                                source={fastFood}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Fast Food</Text>
                        </View>
                            
                    </TouchableOpacity>
                </View> 
                <View style={style.viewStyle}>
                    <TouchableOpacity style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen2', {list: this.state.bakery, type: 'explore', initial: 'screen16', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                        <View style={style.imageContainer}>
                            <Image
                                source={bakery}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Bakery</Text>
                        </View>
                            
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touchableStyle}
                    onPress = {() => this.props.navigation.navigate('screen2', {list: this.state.vegan, type: 'explore', initial: 'screen16', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                        <View style={style.imageContainer}>
                            <Image
                                source={vegan}
                                style={style.imageStyle} />
                        </View>
                        <View>
                                <Text style={style.textStyle}>Vegan</Text>
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
        backgroundColor: '#efebe9',
        marginBottom:10,
        
        //elevation:20,
        
    },
    headerText:{
        fontSize:25, 
        fontWeight: '400', 
        color: 'black',
        
        padding: 15
        
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

export default Explore
