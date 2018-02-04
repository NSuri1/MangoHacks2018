import React from 'react';
import Headers from '../Components/Headers'
import { Container, Content, Card, CardItem, Text, View } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

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
	static navigationOptions = ({ navigation })=>{
		return {
			header: <Headers />
		}
	}

	fetchActivities(){
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
					<Text> Hey {this.props.navigation.state.params.user}, whats something that you wanna do </Text>
					<Card>
					{
						this.state.activities.activities.map((item, i) => {
							return(
								<CardItem key={i} button onPress={() => this.addCardItems(item)}>
									<Ionicons name="ios-add-circle-outline" size={20} />
									<Text> {item}</Text>
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