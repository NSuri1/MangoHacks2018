import React from 'react';
import LoginScreen from './LoginScreen/LoginScreen'
import cardview from './NearbyLocationScreen/cardview'

import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { StackNavigator} from 'react-navigation';

const App = StackNavigator({
  card: { screen: cardview },
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
