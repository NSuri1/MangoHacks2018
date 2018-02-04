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
			},
			activityType:"Hack",
			longitude:0,
			latitude: 0, 

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
	componentDidMount(){
		this.fetchActivities();
	}
	addCardItems = (item) => {
		navigator.geolocation.getCurrentPosition((position)=>{
			
			this.setState({
				activityType:item,
				latitude:position.coords.latitude,
				longitude:position.coords.longitude,
			}, 
			()=>{
				this.props.navigation.navigate('card', {activityType:this.state.activityType, latitude: this.state.latitude, longitude: this.state.longitude, user:this.props.navigation.state.params.user});
			}
			)
		})
		//console.log(this.state.activityType);
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
								<CardItem key={i} button onPress={()=>this.addCardItems(item)}>
									<Ionicons name="ios-add-circle-outline" size={20} style={styles.iconSpace} />
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
