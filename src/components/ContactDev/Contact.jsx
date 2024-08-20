import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import "./Contact.css"
import myImage from "../../Assests/Images/my-image.jpg";
import Button3 from '../SharedElements/Button3';
import { useNavigate } from 'react-router-dom';


const Contact = () => {

  const form = useRef();
  const navigate = useNavigate();

  const alert = (event) => {
    event.preventDefault();
    const name = event.target.user_name.value.trim();
    const email = event.target.user_email.value.trim();
    const message = event.target.message.value.trim();

    if (name && email && message) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        window.alert("Please enter a valid email address.");
        return;
      }
      emailjs.sendForm('service_cmyea8l', 'template_tju5l4a', form.current, {publicKey: '0LOTXzk6fob88s2Bs',})
      .then(
        () => {
          window.alert("Successfully submitted your response!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    } else {
      window.alert("Please provide all required information and then submit.");
    }
  }

  const handelHomeClickFunc = ()=> {
    navigate("/");
  }

  return (
    <>
    <div className="home-contact-button">
    <Button3 handelHomeClick={()=> handelHomeClickFunc()}/>
    </div>
    <div className="main-con-elements">
      <div className="why-me">
        <div className="my-image-container">
          <img src={myImage} alt="" className='myImage' />
        </div>
        <div className="why-text">
          <div className="text1"><span>ABOUT ME</span></div>
          <div className="text2 animate__animated animate__fadeInRight">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel</div>
        </div>
      </div>

      <div className="m-form">
        <h1>FEEDBACK</h1>
        <form ref={form} className="m-form1" onSubmit={(event) => alert(event)}>
          <input type="text" name="user_name" className='m-user' placeholder='Name' />
          <input type="email" name="user_email" className='m-user' placeholder='Email' />
          <textarea rows="5" cols="40" name="message" className='m-user' placeholder='Message' />
          <button type='submit' className='m-sub-button'>Send</button>
        </form>
      </div>

      <div className="con">
        <div className="header-name">
          <p>CONTACT ME</p>
        </div>

        <div className="line01"></div>

        <div className="details-me">

          <div className="st-address">
            <i class="fa-solid fa-location-dot" />
            <span>Kolkata, West Bengal</span>
          </div>

          <div className="ph-no">
            <i class="fa-solid fa-phone" />
            <span>7364833228</span>
          </div>

          <div className="mail-id">
            <i class="fa-solid fa-envelope" />
            <span>saha.titas.2016@gmail.com</span>
          </div>

        </div>

      </div>
      </div>
    </>
  )
}

export default Contact