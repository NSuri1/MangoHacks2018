import React from 'react';
import Headers from '../Components/Headers'
import { Container, Content, Card, CardItem, Text, Icon, View } from 'native-base';

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
								<CardItem key={i++}>
									{console.log(i)}
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