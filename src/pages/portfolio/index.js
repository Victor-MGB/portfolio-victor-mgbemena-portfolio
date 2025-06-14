import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import sheritageYellow from "../../assets/images/Annotation 2025-06-10 211635.png";
import sheritageYellow1 from "../../assets/images/Annotation 2025-06-12 061948.png";
import bitfluxcapital from "../../assets/images/Annotation 2025-06-11 200737.png";
import vacation from "../../assets/images/Annotation 2025-06-12 063247.png";
import figure1 from "../../assets/images/Figure_1.png"

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 row">
  <div className="col-md-6 mb-4">
    <div className="card h-100">
      <img src={sheritageYellow} className="card-img-top" alt="Project Screenshot" />
      <div className="card-body d-flex flex-column">
        <p className="card-text text-black flex-grow-1">
         <strong>Sheritage Online Banking</strong>  is a secure, user-friendly digital banking platform designed to provide customers with seamless access to their financial services anytime, anywhere. Built with modern web technologies, Sheritage Online Banking offers a comprehensive suite of features including account management, fund transfers, bill payments, transaction history, and real-time notifications. The platform emphasizes security with robust authentication, encryption, and fraud prevention measures to ensure users’ data and money are always protected. 
          Designed with a clean and intuitive interface, Sheritage empowers users to efficiently manage their finances with ease and confidence.
        </p>
        <div className="mb-3">
          <strong className="text-black">Skills: React, TailwindCss, CSS, Nodejs, Express, MongoDB, Mongoose, JWT, Bcrypt, Axios, and more.</strong> 
        </div>
        <a href="https://sheritage-shb.netlify.app/" className="btn btn-primary mt-auto" target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
    </div>
  </div>

  <div className="col-md-6 mb-4">
    <div className="card h-100">
      <img src={bitfluxcapital} className="card-img-top" alt="Project Screenshot" />
      <div className="card-body d-flex flex-column">
        <p className="card-text text-black flex-grow-1">
          <strong>BitFluxCapital</strong> is a modern cryptocurrency web platform designed to provide users with real-time access to digital asset data, secure transactions, and intuitive portfolio management. The platform allows users to view live crypto prices, track market trends, and manage their holdings with ease. Built using cutting-edge technologies, BitFluxCapital prioritizes performance, responsive design, and strong security measures. It features a clean UI, interactive charts, secure authentication, and dynamic API integration to deliver up-to-date market information. This project showcases my skills in frontend and backend development, 
          API integration, user experience design, and building scalable web applications in the fintech space.
        </p>
        <div className="mb-3">
          <strong className="text-black">Skills: React, TailwindCss, CSS, Node.js, Express.js, MongoDB, Mongoose, Jwt, Bcrypt, Axios, and more.</strong> 
        </div>
        <a href="https://bitfluxcapital.netlify.app/" className="btn btn-primary mt-auto" target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
    </div>
  </div>

  <div className="col-md-6 mb-4">
    <div className="card h-100">
      <img src={sheritageYellow1} className="card-img-top" alt="Project Screenshot" />
      <div className="card-body d-flex flex-column">
        <p className="card-text text-black flex-grow-1">
          <strong>Sheritage recap</strong>   is a secure, user-friendly digital banking platform designed to provide customers with seamless access to their financial services anytime, anywhere. Built with modern web technologies, Sheritage Online Banking offers a comprehensive suite of features including account management, fund transfers, bill payments, transaction history, and real-time notifications. The platform emphasizes security with robust authentication, encryption, and fraud prevention measures to ensure users’ data and money are always protected. 
          Designed with a clean and intuitive interface, Sheritage empowers users to efficiently manage their finances with ease and confidence.
        </p>
        <div className="mb-3">
          <strong className="text-black">Skills: React, TailwindCss, CSS, Nodejs, Express, MongoDB, Mongoose, JWT, Bcrypt, </strong>  
        </div>
        <a href="https://sheritage.netlify.app/" className="btn btn-primary mt-auto" target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
    </div>
  </div>

  <div className="col-md-6 mb-4">
    <div className="card h-100">
      <img src={vacation} className="card-img-top" alt="Project Screenshot" />
      <div className="card-body d-flex flex-column">
        <p className="card-text text-black flex-grow-1">
          <strong>Asian Vac 🌴 VacationVista – Your Gateway to Memorable Getaways</strong>  is a beautifully designed vacation booking platform that helps users discover, plan, and reserve unforgettable travel experiences. Whether you're dreaming of a beach escape, a mountain retreat, or a cultural city tour, 
          this site offers an intuitive and inspiring interface to explore destinations, view accommodations, check availability, and book seamlessly.
        </p><br />
        The platform features:
        <p className="card-text text-black flex-grow-1"><strong>🏝️ Destination browsing</strong> with stunning visuals</p>
        <p className="card-text text-black flex-grow-1"><strong>🏨 Accommodation listings</strong> with detailed descriptions and reviews</p>
        <p className="card-text text-black flex-grow-1"><strong>📅 Real-time booking system</strong> for planning and reservations</p>
        <p className="card-text text-black flex-grow-1"><strong>🌐 Responsive design</strong> for mobile, tablet, and desktop</p>
        <p className="card-text text-black flex-grow-1"><strong>🔐 Secure payment integration</strong> for hassle-free transactions</p>
        <div className="mb-3">
          <strong className="text-black">Skills: React, TailwindCss, CSS</strong> 
        </div>
        <a href="https://asian-vac.netlify.app/" className="btn btn-primary mt-auto" target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
    </div>
  </div>

  <div className="col-md-6 mb-4">
    <div className="card h-100">
      <img src={figure1} className="card-img-top" alt="Project Screenshot" />
      <div className="card-body d-flex flex-column">
        <p className="card-text text-black flex-grow-1">
          <strong> Stock Market Simulator & Visualizer</strong>Just simulated real-world stock price paths using Monte Carlo methods in Python — from scratch with only NumPy and Matplotlib!  
                  🔁 Simulated 100+ future price paths <br />   📊 Visualized volatility and drift with shaded standard deviations  <br />
🔍                All math-driven, no libraries — just code + finance concepts.  <br />
                  Check out the results 👇  
        </p><br />
        The platform features:
        {/* <p className="card-text text-black flex-grow-1"><strong>🏝️ Destination browsing</strong> with stunning visuals</p>
        <p className="card-text text-black flex-grow-1"><strong>🏨 Accommodation listings</strong> with detailed descriptions and reviews</p>
        <p className="card-text text-black flex-grow-1"><strong>📅 Real-time booking system</strong> for planning and reservations</p>
        <p className="card-text text-black flex-grow-1"><strong>🌐 Responsive design</strong> for mobile, tablet, and desktop</p>
        <p className="card-text text-black flex-grow-1"><strong>🔐 Secure payment integration</strong> for hassle-free transactions</p> */}
        <div className="mb-3">
          <strong className="text-black">Skills: Python, Numpy, Matplotlib</strong>
        </div>
        <a href="https://github.com/Victor-MGB/interactive_stock_simulator" className="btn btn-primary mt-auto" target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
    </div>
  </div>
</div>

        {/* <img src={sheritageYellow} alt=""/> */}
      </Container>
    </HelmetProvider>
  );
};
