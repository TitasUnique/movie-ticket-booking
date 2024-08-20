import React, { useState } from 'react'
import './BookTicket.css'
import { useLocation,useNavigate } from "react-router-dom";
import Button2 from '../SharedElements/Button2';
import Button3 from '../SharedElements/Button3';
import screen from "../../Assests/Images/screen.png";
import seat from "../../Assests/Images/seat.png";
import { useSelector, useDispatch } from 'react-redux';

const BookTicket = () => {

  const [SeatSelectState, setSeatSelectState] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const { poster, timming, trailer, rating, details } = location.state || {};

  const BookedSeats = useSelector((state) => state.movieBookSeat);

  const handelclick = () => {
    if (SeatSelectState){
      {
        BookedSeats.map((row) => {
          {
            row.map((cell) => (
              cell.seatId === SeatSelectState ? cell.booked = true : cell.booked = cell.booked
            ))
          }
        })
      }
      dispatch({
        type: "seatBookdetails",
        payload: BookedSeats
      })
      setSeatSelectState();
      let x = generateRandomString();
      window.confirm(`Your seat no. - ${SeatSelectState} is booked & the ticket ID is - ${x} \nPlease screenshot this ID & show it to the theatre entry point.`);
    }
    else {
      window.alert("Please select seat first !!!");
    }
    
  }

  const handelCellclick = (cell) => {
    setSeatSelectState(cell);
  };

  const showerror = (cell) => {
    alert(`${cell} no. seat is already Booked `);
  };

  function generateRandomString(length = 8) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  const handelHomeClickFunc = ()=> {
    navigate("/");
  }

  return (
    <>
      <div className="trailer">
        {/* {trailer ? <video className='video-trailer' autoPlay muted loop><source src={trailer} type="video/mp4" />Your browser does not support the video tag.</video> : <span>No trailer data</span>} */}
        {trailer ? <iframe className='video-trailer' src={trailer} >Your browser does not support the video tag.</iframe> : <span>No trailer data</span>}
      </div>
      <div className="main-book">
        <div className="book-left animate__animated animate__bounceInDown">
          <div className="poster">{poster ? <img src={poster} alt="poster" /> : <h2>No img data</h2>}</div>
          <div className="details">{details ? <span>{details}</span> : <span>No details data</span>}</div>
          <div className="ratings">{rating ? <span>{rating} <i className="fa-solid fa-star fa-beat"></i></span> : <span>No rating data</span>}</div>
          <Button2 clickevent={() => handelclick()}></Button2>
        </div>
        <div className="book-right animate__animated animate__zoomIn">
          <div className="home-button-div">
            <Button3 handelHomeClick={()=> handelHomeClickFunc()}/>
          </div>
          <div className="timming">{timming ? <span>You are booking for {timming}</span> : <span>no timming data</span>}</div>
          <img className="screen-image" src={screen} alt="no image for screen" />
          <div className="bookSeats">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {BookedSeats.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className={cell.booked ? 'booked-seat' : cell.seatId === SeatSelectState ? 'available-select-seat select-seat' : 'available-seat'}
                        onClick={() => {
                          cell.booked ? showerror(cell.seatId) : handelCellclick(cell.seatId);
                        }}>
                        <img className="seat-image" src={seat} alt="no seat image" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookTicket