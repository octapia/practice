import React from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";

export default function Map({ location, zoomLevel }) {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA8lbLXQHQBFpLmerTS4B0XVlFPa_G45Ts" }}
        defaultCenter={location.center}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.center.lat}
          lng={location.center.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
}

const LocationPin = ({ text }) => (
  <div>
    <i className="fas fa-map-marker-alt"></i>
    <b>{text}</b>
  </div>
);
