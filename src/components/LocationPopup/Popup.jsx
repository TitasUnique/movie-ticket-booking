import React, { useState, useEffect } from 'react';
import movielist from '../../Location_Data/MoviesData';
import './Popup.css';
import { useDispatch } from 'react-redux';

const Popup = ({ onClose }) => {

  const dispatch = useDispatch();

  const [cityList, setCityList] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [theatreList, setTheatreList] = useState([]);
  const [selectedTheatre, setSelectedTheatre] = useState("");

  useEffect(() => {
    setCityList(movielist.movies.map(movie => movie.Location));
  }, []);

  useEffect(() => {
    if (selectedCity) {
      const selectedLocation = movielist.movies.find(movie => movie.Location === selectedCity);
      if (selectedLocation) {
        setTheatreList(Object.keys(selectedLocation.Theatres));
      } else {
        setTheatreList([]);
      }
      setSelectedTheatre("");
    } else {
      setTheatreList([]);
    }
  }, [selectedCity]);

  const handleSubmit = () => {
    if (selectedCity && selectedTheatre) {
      dispatch({
        type:"selectedCity",
        payload: selectedCity
      })
      dispatch({
        type:"selectedTheatre",
        payload: selectedTheatre
      })
      onClose();
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <>
      <div className="popup"></div>
      <div className="pop-container">
        <h1>Please select your location</h1>
        <div className="labels">
          <label>
            City:
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">Select a city</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>
          <label>
            Theatres:
            <select
              value={selectedTheatre}
              onChange={(e) => setSelectedTheatre(e.target.value)}
            >
              <option value="">Select a Theatre</option>
              {theatreList.map((theatre) => (
                <option key={theatre} value={theatre}>
                  {theatre}
                </option>
              ))}
            </select>
          </label>
        </div>
        <br />
        <button className="btn" onClick={handleSubmit}>
          <span className="btn-content">Save</span>
        </button>
      </div>
    </>
  );
};

export default Popup;
