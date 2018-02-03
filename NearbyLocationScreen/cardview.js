import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>Hi,</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  
                  I want kill my self;
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text> shit</Text>
            </CardItem>
         </Card>


         <Card>
            <CardItem header>
              <Text>Hi again,</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  
                  I still want kill my self;
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text> fuck me</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}