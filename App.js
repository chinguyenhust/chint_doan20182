import React, {Component} from 'react';
import Home from './src/home/Home'
import Demo from './src/home/Demo'
import { StackNavigator,createStackNavigator, createAppContainer } from 'react-navigation'; 
const MainStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Demo: {
      screen: Demo,
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

 export default createAppContainer(MainStack)