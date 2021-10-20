import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import {createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import firebase from 'firebase'
import nearMe from './src/nearMe'
import { setTopLevelNavigator} from './src/nearMe'
import Events from './src/eando'
import Account from './src/account'
import Explore from './src/explore'
import Points from './src/points'
import UpcomingBooking from './src/upcomingBookings'
import expiredBooking from './src/expiredBooking'
import contactUs from './src/contactUs'
import ND from './src/noDisplay'
import ExIcon from './src/logo/explore.png'
import AccIcon from './src/logo/account.png'
import EOIcon from './src//logo/voucher.png'
import Offers from './src/offers'
import OutletAddress from './src/multipleAddress'
import OutletDetail from './src/outletDetailPage'
import NearIcon from './src/logo/nearme.png'
import Confirm from './src/confirm'
import SignUp from './src/SignUp'
import Login from './src/Login'
import Otp from './src/Otp'
import AboutEvent from './src/aboutEvent'
import BookEvent from './src/bookEvent'
import ExploreOutlet from './src/exploreOutlet'
import Spinner from './src/spinner'
import SplashScreen from './src/SplashScreen'



  

//events and offers top bars
const matTab = createMaterialTopTabNavigator({
  events: Events,
  offers: Offers
},{
  tabBarOptions:{
    inactiveTintColor:'grey',
    indicatorStyle:{
      backgroundColor: 'brown', 
    },
    
    activeTintColor: 'black',
    labelStyle: {
      textAlign: 'center',
      fontSize: 15
    },
    style:{
      backgroundColor: 'white',
      height: 50,
    }
  }
}) 

// events and offers stack
const stackNav = createStackNavigator({
  screen3: {
    screen: matTab,
    navigationOptions:{
    header: () => (
      <View style={style.headerStyle}>
          <Text style={style.headerText}>
              Events and Offers
          </Text>
      </View>
    )
  }},
  screen4: ND,
  screen19: {
    screen: OutletDetail,
    navigationOptions: ({navigation}) => ({
      //title: 'OutletDetail',
      title: navigation.state.params.outlet.name,
      headerStyle:{
        borderWidth:0, 
        height: 50, 
        margin: 0, 
        position: 'absolute',
        backgroundColor: '#efebe9',
        textAlign: 'center',
        flex: 1
        
      },
      headerTitleStyle: {
        fontSize:25, 
        fontWeight: '300', 
        color: 'black', 
        //paddingLeft: 30,
        
      },
      
    })
  },
  screen23: {
    screen: Confirm
  },
  screen24: {
    screen: AboutEvent
  },
  screen25: {
    screen: BookEvent
  }
},{headerLayoutPreset: 'center'}) 

//accounts drawer
const drawerNav = createDrawerNavigator({
  Account: Account,
  Points: Points,
  'Upcoming Bookings': UpcomingBooking,
  'Expired Bookings': expiredBooking,
  'Contact Us': contactUs,
},{})


//account stack
const AccStack = createStackNavigator({
  screen5: {
    screen: drawerNav,
    navigationOptions:{
     header: null,
    
  }}
},{})

//nearme stack
const NearStack = createStackNavigator({
    screen6: {
      screen: nearMe,
      navigationOptions:{
        header: null
    }},
    screen7: {
      screen: OutletAddress,
      navigationOptions:{
        title: 'Outlet Address',
        headerStyle:{
          backgroundColor: '#efebe9'
        },
        headerTitleStyle: {
          fontSize:25, 
          fontWeight: '300', 
          color: 'black', 
          paddingLeft: 30
        }
      }
    },
    screen8: {
      screen: OutletDetail,
      navigationOptions: ({navigation}) => ({
        //title: 'OutletDetail',
        title: navigation.state.params.outlet.name,
        headerStyle:{
          borderWidth:0, 
          height: 50, 
          margin: 0, 
          position: 'absolute',
          backgroundColor: '#efebe9',
          textAlign: 'center',
          flex: 1
          
        },
        headerTitleStyle: {
          fontSize:25, 
          fontWeight: '300', 
          color: 'black', 
          //paddingLeft: 30,
          
        },
        
      })
    },
    screen9: {
      screen: Confirm
    },
    screen14: {
      screen: AboutEvent
    },
    screen15: {
      screen: BookEvent
    }

},{headerLayoutPreset: 'center'})

// explore stack
const sNav = createStackNavigator({
  screen1: {
    screen: Explore,
    navigationOptions: {
      header: null
    }
  },
  screen2: ND,
  screen16: {
    screen: OutletDetail,
    navigationOptions: ({navigation}) => ({
      //title: 'OutletDetail',
      title: navigation.state.params.outlet.name,
      headerStyle:{
        borderWidth:0, 
        height: 50, 
        margin: 0, 
        position: 'absolute',
        backgroundColor: '#efebe9',
        textAlign: 'center',
        flex: 1
        
      },
      headerTitleStyle: {
        fontSize:25, 
        fontWeight: '300', 
        color: 'black', 
        //paddingLeft: 30,
        
      },
      
    })
  },
  screen20: {
    screen: Confirm
  },
  screen21: {
    screen: AboutEvent
  },
  screen22: {
    screen: BookEvent
  }
},{headerLayoutPreset: 'center'})

// bottom tabs
const AppNaviagtor = createBottomTabNavigator({
  NearMe: {
    screen:NearStack,
    navigationOptions:{
      tabBarIcon: () => (
        <Image
        source = {NearIcon}
        style={{height: 30, width:30}}
        />
    )
  }},
  Explore: {
    screen:sNav,
    navigationOptions:{
      tabBarIcon: () => (
        <Image
        source = {ExIcon}
        style={{height: 30, width:30}}
        />
    )
  }},
  EandO: {
    screen: stackNav,
    navigationOptions:{
      tabBarIcon: () => (
        <Image
        source = {EOIcon}
        style={{height: 30, width:30}}
        />
    ),
    
  },
},
  Account: {
    screen: AccStack,
    navigationOptions:{
      tabBarIcon: () => (
        <Image
        source = {AccIcon}
        style={{height: 30, width:30}}
        />
    )
  }}
},{
  tabBarOptions:{
    activeTintColor:'black',
    activeBackgroundColor:'#f5f5f5',
    showIcon: true,
    labelStyle: {
      fontWeight:'200'
    },
    showLabel: true
    
  }
})

const finalStack = createStackNavigator({
  
  screen10: {
    screen: Login,
    navigationOptions:{
      header: null
    }
  },
  screen11: {
    screen: SignUp
  }, 
  screen13: {
    screen: AppNaviagtor,
    navigationOptions:{
      header: null
    }
  }
},{}) 

const AppContainer = createAppContainer(finalStack);
const TabContainer = createAppContainer(AppNaviagtor);


export default class App extends Component {
  state = {loggedIn:null}
      componentWillMount(){
        if (!firebase.apps.length) {
          
          firebase.initializeApp({
              apiKey: "AIzaSyD8e5uCCTmuFjn-CmKNaxdmaNLeZJ6UO9M",
              authDomain: "shuttle-34268.firebaseapp.com",
              databaseURL: "https://shuttle-34268.firebaseio.com",
              projectId: "shuttle-34268",
              storageBucket: "",
              messagingSenderId: "241387829278",
              appId: "1:241387829278:web:1e85379f28043062"
            });
          
        }
          
          firebase.auth().onAuthStateChanged((user)=>{
            if(user){
              this.setState({loggedIn:true})
            }else{
              this.setState({loggedIn:false})
            }
          
          });
  }
  
  render() {
    switch(this.state.loggedIn){
      default:
          return(<SplashScreen/> )
      case true:
        return <TabContainer/>
      case false:
        return (<AppContainer
                ref={(navigatorRef) => {setTopLevelNavigator(navigatorRef);}} />);
     
    }
  }
}

/* export default class App extends Component {
  state={
      loggedIn: null
    }
  
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyD8e5uCCTmuFjn-CmKNaxdmaNLeZJ6UO9M",
      authDomain: "shuttle-34268.firebaseapp.com",
      databaseURL: "https://shuttle-34268.firebaseio.com",
      projectId: "shuttle-34268",
      storageBucket: "",
      messagingSenderId: "241387829278",
      appId: "1:241387829278:web:1e85379f28043062"
    })
    
    firebase.auth().onAuthStateChanged((user) => {
      console.log('entered')
        if (user){
          
          this.setState({loggedIn: true})
          
        }else {
          
          this.setState({loggedIn: false})
        }
      })
  }

  render() {
    switch(this.state.loggedIn){
      case true:
          return(<TabContainer/>);
      case false:
          return(<AppContainer ref={navigatorRef => {setTopLevelNavigator(navigatorRef) }} />);
      default:
          return(<Spinner/>) 
    }
  }
}  */

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
  }
}



