import React from 'react';
import ActivityScreen from './ActivityScreen/ActivityScreen';
import Headers from './Components/Headers'
import LoginScreen from './LoginScreen/LoginScreen'
import cardview from './NearbyLocationScreen/cardview'

import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { StackNavigator} from 'react-navigation';

const App = StackNavigator({
  Login: { screen: LoginScreen },
  Activity: {screen: ActivityScreen},
  card: { screen: cardview },
});

export default App;
