import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={{ width: '100%', height: '100%', backgroundColor: 'rgb(229, 227, 223)' }}
        initialCenter={{
          lat: -27.499931,
          lng: 153.014990
        }}
      >

        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDFB-BthOmKg4k5BORnWLsqvTH3mFCkUwU')
})(MapContainer)