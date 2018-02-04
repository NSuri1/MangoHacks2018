import React from 'react';
import Headers from '../Components/Headers'
import { Container, Content, Card, CardItem, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

class ActivityScreen extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			activities: {
				activities: []
			}
		}
	}
	static navigationOptions = {
		header: <Headers />
	}

	fetchActivities()
	{
		return fetch('https://mangoserver2018.herokuapp.com/activities')
		.then((response) => response.json())
		    .then((responseJson) => {
		      this.setState({
		      	activities: responseJson,
		      }); 
		    })
		    .catch((error) => {
		      console.error(error);
		    });
	}
	componentDidMount()
	{
		this.fetchActivities();
	}
	loadCardItems()
	{
		
	}
	render(){
		return(
			<Container>
				<Content>
					<Text style={styles.bigblue}> Hey {this.props.navigation.state.params.user}, whats something that you wanna do </Text>
					<Card>
					{
						this.state.activities.activities.map((item, i) => {
							return(
								<CardItem button onPress={()=>console.log('hi')} key={i++}>
									<Ionicons name="ios-add-circle-outline" size={32} />
									<Text>{item}</Text>
								</CardItem>
							)

						})
					}						
					</Card>
				</Content>
			</Container>
		)
	}
}
export default ActivityScreen;

const styles = StyleSheet.create({
  bigblue: {
    color: '#7AC4C2',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  red: {
    color: 'red',
  },
});