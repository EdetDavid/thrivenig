import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";

import color from "../../config/colors";
import "./Subsidiaries.css";

const Subsidiaries = () => {
  return (
    <div className="container mt-5">
      <div className="row  justify-content-center inline-flex  align-items-center mb-5 mx-auto">
        {/* card 1*/}

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-anchor-placement="top-bottom"
          className="col-md-4"
        >
          <Card className="custom-card ">
            <div className="position-absolute icon-wrapper">
              <FaShieldAlt
                style={{ marginTop: 7 }}
                color={color.blue}
                className="card-icon"
              />
            </div>
            <Card.Body style={{ marginTop: "8%" }}>
              <Card.Title className=" card-title">
                THRIVE INSURANCE BROKERS
              </Card.Title>
              <Card.Text>
                Thrive Insurance Brokers Limited is a registered insurance
                broker providing risk management and insurance solutions for
                businesses and individuals. We help our clients better quantify
                and manage their risks in order to survive and thrive. Our
                Mission is to provide outstanding insurance intermediation
                service through continous customer evaluation and cutting edge
                technology.
              </Card.Text>
              <Button id="subsidiaries-btn" variant="transparent">
                <a
                  className="text-dark  text-decoration-none p-0 m-0"
                  href="https://www.insurance.thrivenig.com"
                >
                  Visit
                </a>
                <BsArrowRight />
              </Button>
            </Card.Body>
          </Card>
        </div>

        {/* card 2 */}
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
          className="col-md-4"
        >
          <Card className="custom-card">
            <div className="position-absolute icon-wrapper">
              <ImAirplane
                style={{ marginTop: 7 }}
                color={color.red}
                className="card-icon" // Add class for the icon
              />
            </div>
            <Card.Body style={{ marginTop: "7%" }}>
              <Card.Title className=" card-title">
                THRIVE TRAVELS AND TOURS
              </Card.Title>
              <Card.Text>
                Thrive Travels and Tours is an IATA certified and NANTA
                registered Travel Management Company in Nigeria that provide
                customers with reliable, personalized travel services. Our aim
                is to bring you a massive choice of travel products at
                attractive prices. This ranges over package holidays, tailor
                made itineraries, scheduled flight, business travel, cruises,
                car hire and worldwide hotels.
              </Card.Text>
              <Button id="subsidiaries-btn" variant="transparent">
                <a
                  className="text-dark text-decoration-none p-0 m-0"
                  href="https://www.travels.thrivenig.com"
                >
                  Visit
                </a>
                <BsArrowRight />
              </Button>
            </Card.Body>
          </Card>
        </div>
        {/* card 3 */}
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="1000"
          data-aos-anchor-placement="top-bottom"
          className="col-md-4"
        >
          <Card className="custom-card">
            <div className="position-absolute icon-wrapper ">
              <FaMoneyBillWave
                color="green"
                style={{ marginTop: 7 }}
                className="card-icon"
              />
            </div>
            <Card.Body style={{ marginTop: "8%" }}>
              <Card.Title className=" card-title">
                PARADISE FOREX BUREAU DE CHANGE
              </Card.Title>
              <Card.Text>
                Paradise Bureau De Change offers premier currency exchange
                services, prioritizing customer satisfaction through ongoing
                evaluation and advanced technology. Our experienced team ensures
                secure transactions for personal and business needs, empowering
                clients to navigate confidently.
              </Card.Text>
              <Button id="subsidiaries-btn" variant="transparent">
                <a className="text-dark text-decoration-none p-0 m-0" href="/">
                  Visit
                </a>
                <BsArrowRight />
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Subsidiaries;
