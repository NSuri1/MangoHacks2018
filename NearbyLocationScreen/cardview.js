import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, View } from 'native-base';
import Headers from '../Components/Headers'
import styles from '../styles';

export default class CardHeaderFooterExample extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      people: {
        peopleList:[]
      }
    }
  }

  static navigationOptions = ({ navigation }) => {
    const params =  navigation || {};
    return{
      headerTitle: <Headers text="People Around You"/>,
      headerStyle: styles.mangoOrange,
      headerTitleStyle: styles.blackText,
    }
  };

  fetchPeopleList(){
    return fetch(`https://mangoserver2018.herokuapp.com/activities/people?activityType=${this.props.navigation.state.params.activityType}`)
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
          people: responseJson
      })
    })
    .catch((error)=>{
      console.error(error);
    })

  }
  componentDidMount(){
    this.fetchPeopleList();
  }

  render() {
    return (
      <Container>
        <Card style={[styles.profileDivider, styles.maxProfileHeight, styles.innerCardPadding]}>
          <View >
            <Text style={[styles.blackText, styles.title1]}> My Profile: </Text>
          </View>
          <CardItem header>
            <Text>{this.props.navigation.state.params.user}</Text>
          </CardItem>
          <CardItem style={styles.maxProfileHeight}>
              <Text>Activity you searched for... {this.props.navigation.state.params.activityType}</Text>
          </CardItem>
          <CardItem>
            <Text>Your longitude: {this.props.navigation.state.params.latitude}</Text>
          </CardItem>
          <CardItem>
            <Text>Your latitude: {this.props.navigation.state.params.longitude}</Text>
          </CardItem>
        </Card>
        <Content>
        {
          this.state.people.peopleList.map((person, i)=>{
                return(
                <Card key={i}>
                  <CardItem header>
                    <Text>{person.name}</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>Activity: {person.activity}</Text>
                      <Text>Latitude: {person.latitude}</Text>
                      <Text>Longitude: {person.longitude}</Text>
                    </Body>
                  </CardItem>
                </Card>
          ) 
          })
        }
          <Card>
            <CardItem header>
              <Text>Header </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Hey</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}