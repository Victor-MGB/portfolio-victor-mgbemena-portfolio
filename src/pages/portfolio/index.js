import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import sheritageYellow from "../../assets/images/Annotation 2025-06-10 211635.png";
import bitfluxcapital from "../../assets/images/Annotation 2025-06-11 200737.png"

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
          <strong>Skills:</strong> React, Bootstrap, CSS
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
          <strong>Skills:</strong> React, Bootstrap, CSS
        </div>
        <a href="https://bitfluxcapital.netlify.app/" className="btn btn-primary mt-auto" target="_blank" rel="noreferrer">
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
