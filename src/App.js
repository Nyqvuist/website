import './App.css';
import Banner from "./components/Banner";
import BackgroundImage from "./assets/background.jpeg";


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${BackgroundImage})`}}>
      <div className="Banner">
      <h1>Invite the Hashashin Bot now!</h1>
      <Banner/>
      </div>
    </div>
  );
}

export default App;
