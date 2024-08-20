import React, { useState, useEffect } from 'react';
import './Movies.css';
import { useSelector, useDispatch } from 'react-redux';
import data from "../../Location_Data/MoviesData";
import { useNavigate } from "react-router-dom";
import Button1 from '../SharedElements/Button1';
import movielist from '../../Location_Data/MoviesData';


const Movies = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const city = useSelector((state) => state.storecity);
    const theatre = useSelector((state) => state.storetheatre);
    const [movies, moviesset] = useState([]);

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

    useEffect(() => {
        const location = data.movies.find(movie => movie.Location === city);
        if (location) {
            moviesset(location.Theatres[theatre].Movies);
        } else {
            moviesset([]);
        }
    }, [city, theatre])

    const handlebtnSubmit = () => {
        if (selectedCity && selectedTheatre) {
            dispatch({
                type: "selectedCity",
                payload: selectedCity
            })
            dispatch({
                type: "selectedTheatre",
                payload: selectedTheatre
            })
        } else {
            alert("Please fill all the fields");
        }
    }

    const handelBookTicketClicked = (movieName, moviePoster, movietimming, movietrailer, movierating, moviedetails, moviebookedSeats) => {
        dispatch({
            type: "seatBookdetails",
            payload: moviebookedSeats
        })
        navigate("/bookSeat", { state: { name: movieName, poster: moviePoster, timming: movietimming, trailer: movietrailer, rating: movierating, details: moviedetails } });
    };
    
    return (
        <>
        <div className="m-main-div">
            <div className="m-left">
                <label className='m-label'>
                    City:
                    <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                        <option value="">{city}</option>
                        {cityList.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Theatres:
                    <select value={selectedTheatre} onChange={(e) => setSelectedTheatre(e.target.value)}>
                        <option value="">{theatre}</option>
                        {theatreList.map((theatre) => (
                            <option key={theatre} value={theatre}>
                                {theatre}
                            </option>
                        ))}
                    </select>
                </label>
                <button className="btn btn-movie-save" onClick={handlebtnSubmit}><span className="btn-content">Save</span></button>
            </div>
            <div className="m-right">
                <h1 style={{fontSize: "2.5vw"}}>Movies in {city}</h1>
                <div className="cards-arena">
                    {movies.map((card, index) => (
                        <div className='cards' key={index}>
                            <img className="images" src={card.poster} alt="#" />
                            <div className="img-hover">
                                <div className="name">{card.name}</div>
                                <div className="timmings">{card.timming}</div>
                            </div>
                            <Button1 handelClick={() => handelBookTicketClicked(card.name, card.poster, card.timming, card.trailer, card.rating, card.details, card.bookedSeats)} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="copyright">
            © 2024 · Titas Saha · All rights reserved
        </div>
        </>
    )
}

export default Movies