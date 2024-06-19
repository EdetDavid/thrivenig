import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

import img from "../../assets/images/city.jpg";

import "./Whatwedo.css";

const Whatwedo = () => {
  return (
    <>
      <div
        style={{ height: 500 }}
        className="header-container mt-5 pt-5 justify-content-center align-items-center"
      >
        <Image src={img} className="header-image h-100" />
        <div
          style={{ fontWeight: "700" }}
          className="header-text display-1 mt-5 pt-5 "
        >
          What we do
        </div>
      </div>

      <Container>
        <Row className="my-5" data-aos="fade-up">
          <Col>
            <Card>
              <Card.Body className="blue-shadow">
                <Card.Title>What we do</Card.Title>
                <Card.Text className="lead">
                  At Thrive Insurance Brokers Limited, we offer superior
                  insurance intermediary service to both individual and
                  corporate clients. We are committed to providing outstanding
                  level of service to our clients who are the center of
                  everything we do. &nl; Our Culture of professionalism and
                  customer centreredness have set us apart from the pack. We
                  work business needs and individual circumstances. Hence we are
                  able to recommend solutions from our broad range of products
                  and services that mitigate risk and add value.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-5" data-aos="fade-up">
          <Col>
            <Card>
              <Card.Body className="red-shadow">
                <Card.Title>Our Services</Card.Title>
                <Card.Text className="lead">
                  <ul>
                    <li className="list-item">Risk Assesment.</li>
                    <li className="list-item">
                      Advisory services & solutions.
                    </li>
                    <li className="list-item">
                      Negotiations of competitive premiums and policy terms with
                      insurers; giving clients the best coverage at optimal
                      price.
                    </li>
                    <li className="list-item">
                      Ensuring prompt arrangement of insurance cover and
                      renewals.
                    </li>
                    <li className="list-item">
                      Researching policies from different insurers.
                    </li>
                    <li className="list-item">
                      Placing of client's business with reputable insurers.
                    </li>
                    <li className="list-item">
                      Claims Processing / administration.
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-5" data-aos="fade-up">
          <Col>
            <Card>
              <Card.Body className="gray-shadow">
                <Card.Title>Our Competitive Edge</Card.Title>
                <Card.Text className="lead">
                  Our vision is to create a better everyday life for our
                  customers. We aim to achieve this by fostering a culture of
                  innovation, sustainability, and social responsibility. We
                  envision a future where our solutions contribute to a more
                  connected and prosperous world.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Whatwedo;
