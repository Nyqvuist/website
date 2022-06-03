import './App.css';
import Main from "./pages/Main";
import Commands from "./pages/Commands";
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
          <Route path="/commands" element={<Commands/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
