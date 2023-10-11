import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/FavPhotos';
import Contact from '../pages/Contact';
import ArchitecturePhotos from '../pages/ArchitecturePhotos'
import PortraitPhotos from '../pages/Portraits';
import {Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation();
return (
  <AnimatePresence
    initial={true}
    mode="wait">
    <Routes
      key={location.pathname}
      location={location}>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="/favphotos"
        element={<Portfolio />}
      />
      <Route
        path="/contact"
        element={<Contact />}
      />
      <Route
        path="/architecture"
        element={<ArchitecturePhotos/>}
      />
      <Route
        path="/portraits"
        element={<PortraitPhotos/>}
      />
   </Routes>
  </AnimatePresence>
)
};

export default AnimRoutes;
