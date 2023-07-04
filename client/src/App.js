import React from 'react';
import Home from './pages/Home';
import Test from './pages/Test';
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffbe0a"
    },
    secondary: {
      main: "#87ceeb"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Home />
      <Test />
    </div>
  </ThemeProvider>
  );
}

export default App;
