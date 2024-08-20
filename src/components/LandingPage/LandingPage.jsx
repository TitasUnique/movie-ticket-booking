import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import LocationPopup from '../LocationPopup/Popup';
import Movies from "../Movies/Movies";

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='demo' style={{position:'relative'}}>
      {showPopup && <LocationPopup onClose={handleClosePopup} />}
      <Navbar />
      <Home />
      <Movies />
    </div>
  );
};

export default LandingPage;
