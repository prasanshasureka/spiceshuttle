import React, {Component} from 'react';
import { Text, FlatList, Animated, TouchableOpacity, Image, Dimensions } from 'react-native';
import { withCollapsibleForTabChild } from 'react-navigation-collapsible';
import { View } from 'react-native-animatable';
import Card from './Card'
import CardSection from './CardSection';

const screenWidth = Math.round(Dimensions.get('window').width);
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class OutletMenu extends Component{
  static navigationOptions = {
        title: 'MENU',
        tabBarOptions: {
            indicatorStyle: { backgroundColor: 'grey' },
            labelStyle: {fontWeight: '500', fontSize: 15},
            style: { borderTopColor: 'transparent', borderTopWidth: 1, elevation: 0, 
            backgroundColor: 'transparent', height: 50},
            activeTintColor : 'black',
            inactiveTintColor : 'grey',
          }
      }; 

  constructor(props){
    super(props);
    const data = []
    const {name, image, menu } = this.props.navigation.getParam('outlet')
    
    const dummydata = Object.keys(menu)
    for(let i = 0 ; i < dummydata.length ; i++){
      var a = dummydata[i]
      data.push(menu[a])
    }
    this.state = {
      data: data }
  }

 renderItem = ({item}) => (

  <View style={{width: screenWidth, height: 80, borderBottomColor: '#0002', borderBottomWidth: 0.5, paddingHorizontal: 5,flexDirection: 'row'}}>
      <View style={{  alignItems: 'center', justifyContent: 'center'}}>      
        <Image source = {{uri : item.veg}} style={{height: 30, width: 30, margin: 10}}/>
      </View>
      <View style={{  alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 18, paddingBottom: 5}}>{item.dish}</Text>
        <Text style={{fontSize: 15, alignSelf: 'flex-start'}}>₹ {item.price}</Text>
      </View>
  </View> ) 

  render(){
    
    const { animatedY, onScroll } = this.props.collapsible;
    return (
      
      <AnimatedFlatList 
        style={{flex: 1}}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={(a, index) => String(index)}
        onScroll={onScroll} 
        _mustAddThis={animatedY} />
      
    )
  }
}

export default withCollapsibleForTabChild(OutletMenu);