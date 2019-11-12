import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import React, {Component} from 'react';
import CurrentLocation from './Map';

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
            <CurrentLocation
                centerAroundCurrentLocation
                google={this.props.google}
            >
            {/*<Map*/}
            {/*    google={this.props.google}*/}
            {/*    zoom={8}*/}
            {/*    style={mapStyles}*/}
            {/*    initialCenter={{ lat: 47.444, lng: -122.176}}*/}
            {/*>*/}
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
        );
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(Maps);