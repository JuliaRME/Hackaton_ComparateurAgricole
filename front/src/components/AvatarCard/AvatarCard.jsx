import React from "react";
import "./AvatarCard.css";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AvatarCard({ idAgriculteur, farmSize /*, historiqueTransaction**/ }) {
  return (
    <div>
      <div className="card-container">
        <div className="TopSection">
          <h1 classNameme="AgriculteurTitle">Agriculteur n°{idAgriculteur}</h1>
          <div className="FarmSizeTheme">
            <h2>Taille ferme: {farmSize} hectares</h2>
          </div>
        </div>

        <div className="transaction">
          <h2>Historique des transactions</h2>
        </div>

        {/* <Link to="/Transaction">
            <img src={TransactionTab} alt="TransactionTab" className="logo" />
          </Link> */}
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

// const Avatar = () => {
// }
// {
//      return (
// <div className="Card">
//  <div className="Top-Card">
//   <h3>Avatar</h3>
//       <h2>Agriculteur 3</h2>
//        <h3>taille ferme</h3>
//  </div>
//    <div className="ligne_horizontal">
//        <h2>Historique des transactions</h2>
//       </div>
//     </div>
//   );
//  };

//  export default Avatar;
