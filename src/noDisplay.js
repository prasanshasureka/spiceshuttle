import { View, Text, Image, ScrollView } from 'react-native';
import React , {Component} from 'react';
import Sad from './logo/noCategory.png'
import ExploreOutlet from './exploreOutlet'
import EventCard from './eventCard'


class noDisplay extends Component {
    constructor(props){
        super(props);
        list = this.props.navigation.getParam('list')
        console.log(list)
        this.state = {
            outlets: list
            
        }
    }
    
    renderOutletList() {
        return this.state.outlets.map(outlet => <ExploreOutlet key={outlet.name} outlet={outlet} navigation={this.props.navigation} initial = {this.props.navigation.getParam('initial')} first = {this.props.navigation.getParam('first')} second = {this.props.navigation.getParam('second')} third = {this.props.navigation.getParam('third')}/> );
    }

    renderEventList() {
        return this.state.outlets.map(event => <EventCard key={event.name} event={event} navigation={this.props.navigation} moveTo={'screen24'} thenMoveTo={'screen25'}/> )
    }

    render(){
        if (list.length===0){
            return(
                <View style = {style.headerStyle}>
                    
                        <Image
                        source={Sad}
                        style={style.imageStyle}/>
                        <Text style = {style.textStyle}>
                            Sorry! No restaurants of this category available right now. 
                        </Text>
                </View>
            );
        }else{
            if (this.props.navigation.getParam('type')==='explore'){
                return(
                    <ScrollView>
                        {this.renderOutletList()}
                    </ScrollView>
                );
            }else{
                return(
                    <ScrollView>
                        {this.renderEventList()}
                    </ScrollView>
                );
            }
        }

        
        
    }
}

const style = {
    headerStyle:{
        flex:1,
        alignItems: 'center', 
        justifyContent: 'center', 
        
    },
    imageStyle:{
        height:300, 
        width: 300
    },
    textStyle: {
        marginLeft: 30,
        marginRight: 30
    }
}

export default noDisplay
