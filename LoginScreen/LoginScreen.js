import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

export default class LoginScreen extends React.Component{
	state = {
		username:"",
		password:"",
	}
	render(){
	return(
		<Container>
			<Header>
			<Left>

			</Left>
			<Body>
				<Title>Find a Buddy</Title>
			</Body>
			<Right>

			</Right>
			</Header>

		</Container>
	)
	}
}