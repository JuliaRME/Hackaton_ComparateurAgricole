import React from "react";
import "./AvatarCard.css";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AvatarCard({ idAgriculteur, farmSize/*, historiqueTransaction**/ }) {
  return (
    <div>
      <div className="card-container">
        <section className="topSection">
          <h1>Agriculteur n°{idAgriculteur}</h1>
          <div className="FarmSizeTheme">
            <h2>Taille ferme: {farmSize} hectare</h2>
          </div>
        </section>

        <section className="BottomSection">
          <h2>Historique des transactions</h2>
          {/* <Link to="/Transaction">
            <img src={TransactionTab} alt="TransactionTab" className="logo" />
          </Link> */}
        </section>
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
