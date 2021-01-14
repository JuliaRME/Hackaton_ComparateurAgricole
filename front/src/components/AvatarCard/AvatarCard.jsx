import React, { useState, useEffect } from "react";
import "./AvatarCard.css";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";






function AvatarCard({ idAgriculteur, farmSize /*, historiqueTransaction**/ }) {


  const [transactions, setTransactions] = useState([]);
  // const [date, setDate] = useState(null);
  // const [quantite, setQuantite] = useState("");
  // const [prix, setPrix] = useState(null);
  // const [produit, setProduit] = useState("");

  useEffect(() => {  
    fetch('http://localhost:8000/api/transactions')
      .then((res) => res.json())
      .then((data) => {      
        setTransactions(data);
      });
  }, []);





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
          <ul className="listeTransactions">
                {transactions.map((transaction, id) => (
                    <li className="uneTransaction" key={transaction.id}>
                        <div className="divTHistoriqueTransaction">
                          <h2 className="dateTransaction">Date : {transaction.created_at}</h2>
                          <h3 className="produitTransaction">Produit : {transaction.product_id}</h3>
                          <h3 className="quantiteTransaction">Quantité : {transaction.quantity}</h3>
                          <h3 className="prixTransaction">Prix : {transaction.price}</h3>                  
                        </div>
                    </li>
                ))}
          </ul>
      </div>
    </div>
  );
};

AvatarCard.propTypes = {
  idAgriculteur: PropTypes.string.isRequired,
  farmSize: PropTypes.string.isRequired,
  // historiqueTransaction: PropTypes.arrayOf(PropTypes.object),
};

export default AvatarCard;