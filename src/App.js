import './App.css';
import Main from "./pages/Main";
import Steam from "./pages/Steam";
import MTG from "./pages/MTG";
import Pokemon from "./pages/Pokemon";
import General from "./pages/General";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/steam" element={<Steam/>} />
        <Route path="/mtg" element={<MTG/>} />
        <Route path="/pokemon" element={<Pokemon/>} />
        <Route path="/general" element={<General/>} />
      </Routes>
    </Router>
  );
}

export default App;
