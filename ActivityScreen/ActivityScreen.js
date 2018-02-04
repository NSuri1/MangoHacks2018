import React from 'react';
import Headers from '../Components/Headers'
import { Container, Content, Card, CardItem, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import styles from '../styles';

class ActivityScreen extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			activities: {
				activities: []
			}
		}
	}
	static navigationOptions = ({ navigation }) => {
		const params =	navigation || {};
		return{
			headerTitle: <Headers text="Activities"/>,
			headerStyle: styles.mangoOrange,
  			headerTitleStyle: styles.blackText,
		}
	};

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
					<Text style={styles.blackText, styles.spaceAround}> Hey {this.props.navigation.state.params.user}, what do you want to do? </Text>
					<Card>
					{
						this.state.activities.activities.map((item, i) => {
							return(
								<CardItem button onPress={()=>console.log('hi')} key={i++}>
									<Ionicons name="ios-add-circle-outline" size={32} style={styles.iconSpace}/>
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
