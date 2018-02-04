import React from 'react';
import { MapView } from 'expo';
import Headers from '../Components/Headers'

class MapsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markers:[{
        title:this.props.navigation.state.params.otherUserUsername,
        coordinates: {
          latitude:this.props.navigation.state.params.otherUserLatitude,
          longitude:this.props.navigation.state.params.otherUserLongitude
        },
        description:'Contact',
      },
      {
        title:this.props.navigation.state.params.user,
        coordinates:{
          latitude:this.props.navigation.state.params.latitude,
          longitude:this.props.navigation.state.params.longitude
        },
        description:'Contact',
      }]
    }

  }
  static navigationOptions = {
    headerTitle: <Headers text="Maps"/>
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: this.props.navigation.state.params.latitude,
          longitude: this.props.navigation.state.params.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {this.state.markers.map((marker,i) => (
            <MapView.Marker
                key={i}
                coordinate={marker.coordinates}
                title={marker.title}
                description={marker.description}
            >
            </MapView.Marker>
        ))}
      </MapView>
  )
  }
}
export default MapsScreen;