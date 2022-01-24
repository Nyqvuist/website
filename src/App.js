import './App.css';
import Main from "./pages/Main";
import Steam from "./pages/Steam";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/steam" element={<Steam/>} />
      </Routes>
    </Router>
  );
}

export default App;
