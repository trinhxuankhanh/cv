import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyA7_AU9qcw1hPs4mWqxp2y_haIXNAhUemc&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 15.8962421, lng: 108.2021783 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 15.8962421, lng: 108.2021783 }} />
    )}
  </GoogleMap>
));

export default MyMapComponent;