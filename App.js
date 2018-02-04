import React from 'react';

import Headers from './Components/Headers';

//Screens
import LoginScreen from './LoginScreen/LoginScreen';
import ActivityScreen from './ActivityScreen/ActivityScreen';
import cardview from './NearbyLocationScreen/cardview';
import MapsScreen from './MapsScreen/MapsScreen';

import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { StackNavigator} from 'react-navigation';

const App = StackNavigator({
  Login: { screen: LoginScreen },
  Activity: {screen: ActivityScreen},
  card: { screen: cardview },
  Maps: {screen: MapsScreen},
});

export default App;
