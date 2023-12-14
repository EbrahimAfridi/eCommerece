import "./Footer.css";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState('');

  const sendSubscriptionEmail = (subscriberEmail) => {
    // Use your own service ID and template ID
    const serviceId = 'service_m3ed6al';
    const templateIdOwner = 'template_bmlwwgy';
    const templateIdSubscriber = 'template_tzcxyra';
    const userId = "K6gY1CYfV6wvce-M4";

    // Email to owner
    emailjs
      .send(serviceId, templateIdOwner, {
        to_email_owner: 'ahamadarsh92@gmail.com',
        subscriber_email: subscriberEmail,
      }, userId)
      .then(
        (response) => {
          console.log('Email to owner sent successfully', response);
        },
        (error) => {
          console.error('Email to owner could not be sent', error);
        }
      );

    // Email to subscriber
    emailjs
      .send(serviceId, templateIdSubscriber, {
        to_email_subscriber: subscriberEmail,
      }, userId)
      .then(
        (response) => {
          console.log('Email to subscriber sent successfully', response);
          alert('Thank you for subscribing! Check your email for confirmation.');
        },
        (error) => {
          console.error('Email to subscriber could not be sent', error);
          alert('Oops! Something went wrong. Please try again later.');
        }
      );
  };

  const handleSubscribe = () => {
    if (email) {
      sendSubscriptionEmail(email);
    }
    console.log("News-letter sent");
  };



// import {useState} from "react";
// import emailjs from 'emailjs-com';
//
//
// const Footer = () => {
//
//   const [email, setEmail] = useState('');
//
//   const sendSubscriptionEmail = (subscriberEmail) => {
//     // Email to owner
//     emailjs
//       .send('service_m3ed6al', 'template_bmlwwgy', {
//         to_email_owner: 'ahamadarsh92@gmail.com',
//         subscriber_email: subscriberEmail,
//       })
//       .then(
//         (response) => {
//           console.log('Email to owner sent successfully', response);
//         },
//         (error) => {
//           console.error('Email to owner could not be sent', error);
//         }
//       );
//
//     // Email to subscriber
//     emailjs
//       .send('service_m3ed6al', 'template_tzcxyra', {
//         to_email_subscriber: subscriberEmail,
//       })
//       .then(
//         (response) => {
//           console.log('Email to subscriber sent successfully', response);
//           alert('Thank you for subscribing! Check your email for confirmation.');
//         },
//         (error) => {
//           console.error('Email to subscriber could not be sent', error);
//           alert('Oops! Something went wrong. Please try again later.');
//         }
//       );
//   };
//
//   const handleSubscribe = () => {
//     if (email) {
//       sendSubscriptionEmail(email);
//     }
//     console.log("News-letter sent");
//   };

  return(
        <footer className="flex flex-col gap-2 px-4 py-10 mt-[120px] text-white bg-black sm:pl-10 sm:pr-[0px] sm:py-[110px] sm:flex-row selection:bg-white">
            <div className="basis-[40%] selection:text-black">
                <h3 className="mb-2 text-3xl font-bold">SneakEarth</h3>
                <p className="text-lg">Explore the world of sneakers.</p>
                {/*NewsLetter*/}
                <div className="mt-5 ">
                  <input type="text" className="bg-transparent text-white border-white border-2 rounded-lg p-2 px-5 mr-5 py-1" placeholder="xyz@gmail.com"/>
                  <button value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onClick={handleSubscribe} className="bg-white text-black px-5 py-1 hover:bg-black hover:text-white hover:border-white hover:border-2">Subscribe</button>
                </div>

            </div>
            <div className="basis-[20%] selection:text-black">
                <div className="mt-4 mb-3 sm:mb-5 sm:mt-0">
                    <p className="text-xl mt-4 sm:mt-0 sm:mb-2 mb-0 hover:text-[#d3d3d3]">About</p>
                </div>
                <div>
                    <p className="hover:text-[#d3d3d3]">About us</p>
                </div>
                <div>
                    <p className="hover:text-[#d3d3d3]">Features</p>
                </div>
                <div>
                    <p className="hover:text-[#d3d3d3]">News & Blog</p>
                </div>
            </div>
            <div className="basis-[20%] selection:text-black">
            <div className="mt-4 mb-3 sm:mb-5 sm:mt-0">
                    <p className="text-xl mb-2 hover:text-[#d3d3d3]">Connect</p>
                </div>
                <p>
                    <a
                        className="hover:text-[#d3d3d3]"
                        href="https://www.linkedin.com/in/ebrahim-afridi-83188b219/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </p>
                <p>
                    <a
                        className="hover:text-[#d3d3d3]"
                        href="https://twitter.com/EbrahimAfridi3"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Twitter
                    </a>
                </p>
                <p>
                    <a
                        className="hover:text-[#d3d3d3]"
                        href="https://www.instagram.com/ebrahim_afridi12"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                </p>
            </div>
            <div className="basis-[20%] selection:text-black">
            <div className="mt-4 mb-3 sm:mb-5 sm:mt-0">
                    <p className="text-xl mb-2 hover:text-[#d3d3d3]">Support</p>
                </div>
            <   div>
                    <p className="hover:text-[#d3d3d3]">FAQs</p>
                </div>
                <div>
                    <p className="hover:text-[#d3d3d3]">Support Center</p>
                </div>
                <div>
                    <p className="hover:text-[#d3d3d3]">Contact us</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;