import React from "react";
import { StatusBar, View } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";


class Headers extends React.Component{
	render(){
		return(
			<View>
				<Text>{this.props.text}</Text>
			</View>
			
		);
	}
}


export default Headers;