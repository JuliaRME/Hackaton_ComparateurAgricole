import React, { useState, useEffect } from "react";
import "./AvatarCard.css";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";






function AvatarCard({ idAgriculteur, farmSize, transaction }) {
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
        <div className="container-transactions">
                <ul className="listeTransactions">
                      {transaction.slice(transaction.length-3,transaction.length).map((transac) => (

                          <li className="uneTransaction" key={transac.id}>
                              <div className="divTHistoriqueTransaction">
                                <h2 className="dateTransaction" >Date : <br></br>
                                {transac.created_at.substring(0,10)}</h2>
                                <h3 className="produitTransaction">Produit : {transac.product_id}</h3>
                                <h3 className="quantiteTransaction">Quantité : {transac.quantity} t</h3>
                                <h3 className="prixTransaction">Prix : {transac.price} €/Tonne</h3>                  
                              </div>
                          </li>
                      ))}
                </ul>
          </div>
      </div>
    </div>
  );
};

AvatarCard.propTypes = {
  idAgriculteur: PropTypes.string.isRequired,
  farmSize: PropTypes.string.isRequired,
  transaction: PropTypes.arrayOf(PropTypes.object),
};

export default AvatarCard;