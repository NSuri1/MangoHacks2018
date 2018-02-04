import React from 'react';
//Screens
import LoginScreen from './LoginScreen/LoginScreen';
import ActivityScreen from './ActivityScreen/ActivityScreen';
import Headers from './Components/Headers'

import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { StackNavigator} from 'react-navigation';

const App = StackNavigator({
  Login: { screen: LoginScreen },
  Activity: {screen: ActivityScreen},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
