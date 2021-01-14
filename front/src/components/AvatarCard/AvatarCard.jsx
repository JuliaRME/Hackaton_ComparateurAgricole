import React from "react";
import "./AvatarCard.css";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from './planting.png';

function AvatarCard({ idAgriculteur, farmSize /*, historiqueTransaction**/ }) {
  return (
    <div>
      <div className="card-container">
        <div className="TopSection">
        {/* <img src={logo} alt="logo" className="logo" /> */}
          <h1 classNameme="AgriculteurTitle">Agriculteur n°{idAgriculteur}</h1>
          <div className="FarmSizeTheme">
            <h2>Taille ferme: {farmSize} hectares</h2>
          </div>
        </div>

        <div className="transaction">
          <h2>Historique des transactions</h2>
        </div>
      </div>
    </div>
  );
}

AvatarCard.propTypes = {
  idAgriculteur: PropTypes.string.isRequired,
  farmSize: PropTypes.string.isRequired,
  // historiqueTransaction: PropTypes.arrayOf(PropTypes.object),
};

export default AvatarCard;
