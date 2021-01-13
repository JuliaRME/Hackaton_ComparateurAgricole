import React from "react";
import axios from 'axios'; 

import "./Map.scss";
import logo from "./logo.svg";

function Map() {
// const [liste, setListe] = useState();

  const handleclick = () => {
    console.log("click");
    axios.get("URL")
      .then(res => {
        // setListe({});
      })
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
        <iframe
          title="map"
          src="https://www.google.com/maps/d/u/0/embed?mid=1D4h06e_v1PsSijpdz3zst3ZMEPYqIGYh"
          width="1280"
          height="720"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
