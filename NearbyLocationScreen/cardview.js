import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, View } from 'native-base';
import Headers from '../Components/Headers'

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

  static navigationOptions = {
    headerTitle: <Headers />
  }

  fetchPeopleList(){
    return fetch(`https://mangoserver2018.herokuapp.com/activities/people?activityType=${this.props.navigation.state.params.activityType}`)
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
          peopleList: responseJson.peopleList
      });
    })
    .catch((error)=>{
      console.error(error);
    })

  }
  componentWillMount(){
  }
  componentDidMount(){
    this.fetchPeopleList();
  }

  render() {
    return (
      <Container>
      <View>
            <Text> My Profile </Text>
          </View>
          <Card>
            <CardItem header>
              <Text>{this.props.navigation.state.params.user}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Activity you searched for... {this.props.navigation.state.params.activityType}</Text>
                
                <Text>Your longitude: {this.props.navigation.state.params.latitude}</Text>
                
                <Text>Your latitude: {this.props.navigation.state.params.longitude}</Text>
              </Body>
            </CardItem>
            <CardItem footer>
            </CardItem>
         </Card>
        <Content>
        {
          console.log(this.state.people.peopleList)
            /*this.state.people.peopleList.map((person, i)=>{
                return(
                <Card key={i}>
                  <CardItem header>
                    <Text> </Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>{console.log(person)}</Text>
                    </Body>
                  </CardItem>
                </Card>
              

          }) */  
          
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
            <CardItem footer>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}