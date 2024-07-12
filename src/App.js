import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Podcast from './Podcast';
// Import other components/pages here
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/podcast" element={<Podcast/>} />
      </Routes>
    </Router>
  );
}
export default App;