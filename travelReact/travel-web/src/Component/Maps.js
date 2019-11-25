import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import React, {Component} from 'react';
import CurrentLocation from './Map';
import { Segment } from 'semantic-ui-react'

class Maps extends Component {

    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <Segment.Group horizontal>
                <Segment>left</Segment>
                <Segment>middle</Segment>
                <Segment>
                    <CurrentLocation
                        centerAroundCurrentLocation
                        google={this.props.google}
                    >
                        <Marker
                            onClick={this.onMarkerClick}
                            name={'current location'}
                        />
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onclose={this.onClose}
                        >
                            <div>
                                <h4>{this.state.selectedPlace.name}</h4>
                            </div>
                        </InfoWindow>
                    </CurrentLocation>
                </Segment>
            </Segment.Group>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: 'your key'
})(Maps);
