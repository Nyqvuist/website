import './App.css';
import Main from "./pages/Main";
import Steam from "./pages/Steam";
import MTG from "./pages/MTG";
import Pokemon from "./pages/Pokemon";
import General from "./pages/General";
import Navbar from "./pages/navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#b45e46',
    },
    secondary: {
      main: '#eedbc3',
    },
    background: {
      paper: "#eedbc3",
    },
  },
  typography: {
    fontFamily: [
      'Raleway',
      'sans-serif'
    ].join(','),
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/steam" element={<Steam/>} />
          <Route path="/mtg" element={<MTG/>} />
          <Route path="/pokemon" element={<Pokemon/>} />
          <Route path="/general" element={<General/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
