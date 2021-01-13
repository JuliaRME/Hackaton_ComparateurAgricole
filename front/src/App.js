import './App.css';
import AvatarCard from "./components/AvatarCard/AvatarCard";

function App() {
  const AvatarTest = {
    idAgriculteur : "5",
    farmSize : "50"
  }
  return (
    <div className="App">
      <h1>Accueil Map</h1>
      <AvatarCard {...AvatarTest} />
    </div>
  );
}

export default App;
