import React from 'react';
import Home from './pages/Home';
import Test from './pages/Test';
import Login from './pages/Login';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <Router>
        <Routes>
            <Route path="/">
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
            </Route>

            <Route
                path="/test"
                element={<Test />}
              />

            <Route
                path="/login"
                element={<Login />}
              />

        </Routes>
        {/* <div className="App">
          <Home />
          <Test />
        </div> */}
      </Router>

    </ThemeProvider>
  );
}

export default App;
