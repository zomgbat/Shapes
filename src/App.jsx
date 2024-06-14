import Navbar from '../src/components/NavBar.jsx';
import AboutPage from '../src/pages/AboutPage.jsx'
import HomePage from '../src/pages/HomePage.jsx'
import LaikaPage from '../src/pages/LaikaPage.jsx'
import RasputinPage from '../src/pages/RasputinPage.jsx';
import EnriquetaPage from '../src/pages/EnriquetaPage.jsx';
import HakanPage from '../src/pages/HakanPage.jsx';
import AllStories from './pages/AllStories.jsx';
import { Routes, Route } from 'react-router-dom'
import React from 'react';
import '../src/styles/App.css'; // Import your CSS file

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/LaikaPage" element={<LaikaPage />} />
        <Route path="/RasputinPage" element={<RasputinPage />} />
        <Route path="/EnriquetaPage" element={<EnriquetaPage/>} />
        <Route path="/HakanPage" element={<HakanPage/>} />
        <Route path="/AllStories" element={<AllStories />} />
      </Routes>
      
      
    </div>
  );
}

export default App;






