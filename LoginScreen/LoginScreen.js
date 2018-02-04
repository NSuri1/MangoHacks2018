import React from "react";
import { StyleSheet, View } from 'react-native';
import Headers from '../Components/Headers'
import { Container, Header, Title, Left, Right, Button, Body, Content,Text, Card, CardItem, Label, Form, Item, Input } from "native-base";
import { Ionicons } from '@expo/vector-icons';

class LoginScreen extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			user: "",
		}
	}
	static navigationOptions = ({ navigation }) => {
		const params =	navigation || {};
		return{
			headerTitle: <Headers />,
			headerRight: (
				<Button transparent onPress={()=>params.navigate('Activity')}>
					<Ionicons name="ios-menu-outline" size={32} />
				</Button>
			),
		}
	};
	addUser = (text) => {
		this.setState({
			user : text,
		});
	}
	render(){
		return(
			<Container>
				<Content>
					<Form>
						<Item floatingLabel >
							<Label > Username </Label>
							<Input value={this.state.user} onChangeText={this.addUser}/>
						</Item>
						<Item floatingLabel>
							<Label> Password </Label>
							<Input />
						</Item>
					</Form>
					<Button full Danger onPress={() => this.props.navigation.navigate('Activity', { user: this.state.user })}>
						<Text> Submit </Text>
					</Button>
				</Content>
			</Container>
		);
	}
}
export default LoginScreen;

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
