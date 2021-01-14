import './App.css';
import AvatarCard from "./components/AvatarCard/AvatarCard";
import Map from "./components/Map/Map"

function App() {
  const AvatarTest = {
    idAgriculteur : "5",
    farmSize : "50",
    transaction:  [
      {
          "id": 484,
          "created_at": "2016-04-07T22:00:00.000Z",
          "price": 127,
          "quantity": 28.01,
          "product_id": 8,
          "farmer_id": 1,
          "buyer_id": 5
      },
      {
          "id": 2828,
          "created_at": "2017-06-21T22:00:00.000Z",
          "price": 132,
          "quantity": 164.2,
          "product_id": 3,
          "farmer_id": 1,
          "buyer_id": 2
      },
      {
          "id": 3300,
          "created_at": "2017-09-12T22:00:00.000Z",
          "price": 174,
          "quantity": 178.32,
          "product_id": 14,
          "farmer_id": 1,
          "buyer_id": 4
      },
      {
          "id": 6782,
          "created_at": "2019-05-29T22:00:00.000Z",
          "price": 366,
          "quantity": 123.92,
          "product_id": 21,
          "farmer_id": 1,
          "buyer_id": 6
      },
      {
          "id": 7013,
          "created_at": "2019-07-09T22:00:00.000Z",
          "price": 203,
          "quantity": 253.2,
          "product_id": 16,
          "farmer_id": 1,
          "buyer_id": 6
      },
      {
          "id": 9519,
          "created_at": "2020-10-20T22:00:00.000Z",
          "price": 376,
          "quantity": 149.8,
          "product_id": 20,
          "farmer_id": 1,
          "buyer_id": 1
      }
  ]
  }
  return (
    <div className="App">
      <h1>Accueil Map</h1>
      <AvatarCard {...AvatarTest} />
      <Map />
    </div>
  );
}

export default App;
