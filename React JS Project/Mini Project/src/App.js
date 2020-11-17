import React from "react";
import "./App.css";
import Map from "./Components/Map";

export default function App() {
  return (
    <>
      <Map location={location} zoomLevel={15} />
    </>
  );
}
const location = {
  address: "Potiya,Chattagram",
  center: { lat: 22.347500, lng: 91.812200 },
};
