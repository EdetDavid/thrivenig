import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import "./Events.css";

const Events = () => {
  return (
    <>
      <div
        style={{ height: 500 }}
        className="header-container mt-5 pt-5 justify-content-center align-items-center"
      >
        <div
          style={{ fontWeight: "700" }}
          className="header-text display-1 mt-5 pt-5 "
        >
          Events
        </div>
      </div>

      <Container>
        <Row className="my-5" data-aos="fade-up">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Our Events</Card.Title>
                <Card.Text className="lead">
                  Stay updated with our latest events, including pictures and videos from various activities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Pictures Section */}
        <Row className="my-5" data-aos="fade-up">
          <Col>
            <h2>Pictures</h2>
            <Row>
              <Col md={4}>
                <img src="https://via.placeholder.com/300" alt="Event 1" className="img-fluid" />
              </Col>
              <Col md={4}>
                <img src="https://via.placeholder.com/300" alt="Event 2" className="img-fluid" />
              </Col>
              <Col md={4}>
                <img src="https://via.placeholder.com/300" alt="Event 3" className="img-fluid" />
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Videos Section */}
        <Row className="my-5" data-aos="fade-up">
          <Col>
            <h2>Videos</h2>
            <Row>
              <Col md={6}>
                <div className="video-wrapper">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Sample Video 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Col>
              <Col md={6}>
                <div className="video-wrapper">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Sample Video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Events;