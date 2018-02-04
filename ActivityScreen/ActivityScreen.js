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
			}
		}
	}
	static navigationOptions = {
		header: <Headers />
	}

	fetchActivities()
	{
		return fetch('https://379dcd95.ngrok.io/activities')
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
					<Text> Hey {this.props.navigation.state.params.user}, whats something that you wanna do </Text>
					<Card>
					{
						this.state.activities.activities.map((item, i) => {
							return(
								<CardItem button onPress={()=>console.log('hi')} key={i++}>
									<Ionicons name="chevron-small-right" size={32} />
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