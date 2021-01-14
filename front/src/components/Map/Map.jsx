import React, { useState } from "react";
import axios from "axios";
import ReactMapGl, { Marker } from "react-map-gl";

import "./Map.scss";
import logo from "./logo.svg";

function Map() {
  // const [liste, setListe] = useState();

  // mapBox state
  const [viewport, setViewport] = useState({
    latitude: 48.44872485510523,
    longitude: 1.5381733555875658,
    width: "100vw",
    height: "100vh",
    zoom: 7,
  });

  const handleclick = () => {
    console.log("click");
    axios.get("URL").then((res) => {
      // setListe({});
    });
  };

  return (
    <div className="container">
      <div className="container__colonne">
        <div className="container__colonne__titre">
          <img src={logo} alt="logo" />
          <h1>Entrez votre département</h1>
          <input type="text" placeholder="département" />
          <button onClick={handleclick}>Valider</button>
        </div>
        <div className="container__colonne__liste">
          <ul>
            <li>Liste</li>
          </ul>
        </div>
      </div>
      <div className="container__map">
        <ReactMapGl
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          marker here
        </ReactMapGl>
      </div>
    </div>
  );
}

export default Map;
