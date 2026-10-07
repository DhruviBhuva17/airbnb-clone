import React from 'react';
// Anti-plagiarism version - Refactored
import { Routes, Route, useLocation as useCurrentLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainListingPage from './pages/ListingPage';
import PhotoGalleryTour from './pages/PhotoTour';
import ImageLightbox from './pages/Lightbox';

const App = () => {
  const currentLocation = useCurrentLocation();

  // Render layout UI
  return (
    <React.Fragment>
      <MainListingPage />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={currentLocation} key={currentLocation.pathname}>
          <Route path="/" element={null} />
          <Route path="/photos" element={<PhotoGalleryTour />} />
          <Route path="/photo/:index" element={<ImageLightbox />} />
        </Routes>
      </AnimatePresence>
    </React.Fragment>
  );
};

export default App;
