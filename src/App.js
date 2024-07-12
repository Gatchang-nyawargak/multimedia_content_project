import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Videos from './Videos';
import OurPortFolio from './Portfolio';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/videos" element={<Videos />} />
       

        <Route path="/portfolio" element={< OurPortFolio/>} />

      </Routes>
    </Router>
  );
}
export default App;