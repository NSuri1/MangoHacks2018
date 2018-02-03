import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

export default class Headers extends React.Component{
	render(){
		return(
			<Header>
				<Left>
					<Text> Menu </Text>
				</Left>
				<Body>
					<Text>Find A buddy</Text>	
				</Body>
				<Right>
					<Text> Other </Text>
				</Right>
			</Header>
		);
	}
}