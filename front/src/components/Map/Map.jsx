import React, { useEffect, useState } from "react";
import axios from "axios";
import AvatarCard from "./AvatarCard/AvatarCard";
import ReactMapGl, { Marker } from "react-map-gl";
import cityImage from "../../city.png"

import "./Map.scss";
import logo from "./logo.svg";

function Map() {
  const [listeCity, setListeCity] = useState([]); 
  const [farmerCard, setFarmerCard] = useState(); 
  const [cardDisplayed, setCardDisplayed] = useState(false); 
  const [listeFarmer, setListeFarmer] = useState([]); 
  useEffect(() => {
    //on récupère la liste des villes afin de créer les marker
    axios.get("http://localhost:8000/api/cities")
      .then((res)=> {
        setListeCity(res.data);
      })
  }, [])


  // mapBox state
  const [viewport, setViewport] = useState({
    latitude: 48.44872485510523,
    longitude: 1.5381733555875658,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  const handleclick = () =>{
  }

  const handleclickListItem = (id) =>{
    axios.get(`http://localhost:8000/api/farmers/${id}`).then((res) => 
      res.data
    ).then(data => { 
      const farmer = {
        idAgriculteur: data.farmer[0].id,
        farmSize: data.farmer[0].farm_size,
        transaction: data.transactions,
      }
      console.log()
      setFarmerCard(farmer);
      console.log(farmerCard)
      setCardDisplayed(!cardDisplayed);
      console.log(cardDisplayed);
    })
  }

  const handleclickMarker = (id) => {
    axios.get(`http://localhost:8000/api/farmers/city/${id}`).then((res) => 
      res.data
    ).then(data => {
      const farmerTab = data.map((farmer) => farmer.id);
      setListeFarmer(farmerTab);
    })
  };

  return (
    <div className="container">
      <div className="container__colonne">
        <div className="container__colonne__titre">
          <img className="logoAgri" src={logo} alt="logo" />
          <label className="labelPostale">Entrez votre code postale</label>
          <input className="inputPostale" type="text" placeholder="code postale ex: 28230" />
          <button className="buttonInput" onClick={handleclick}>Valider</button>
        </div>
        <div className="container__colonne__liste" >
          <ul className="farmerList">
            {
              listeFarmer.length === 0 ? <p>sélectionner une ville</p>:
              listeFarmer.map((farmerId) => {
                return <li className="farmerListItem" onClick={()=>{handleclickListItem(farmerId)}} key={farmerId}>Agriculteur n°{farmerId}</li>              
              })
            }
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
          {
            listeCity.map(cityMap => (
              <Marker key={cityMap.id} latitude={cityMap.lat} longitude={cityMap.longitude}>
                <div onClick={()=>{handleclickMarker(cityMap.id)}} className="containerMarker">
                  <img className="imgCity" src={cityImage} alt={cityMap.city} />
                  <div className="nameCity">{cityMap.city}</div>
                </div>
              </Marker>
            ))
          }
        </ReactMapGl>
      </div>
      {
        cardDisplayed?<AvatarCard {...farmerCard} />: null
      }
  </div>
  );
}

export default Map;
