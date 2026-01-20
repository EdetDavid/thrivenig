import React, { useState } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import slide1 from "./events_photos/DJI_0027.png";
import slide2 from "./events_photos/DJI_0033.png";
import slide3 from "./events_photos/DJI_0044.png";

import "./Events.css";

const Events = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [slide1, slide2, slide3];

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>
      <div
        style={{ height: 350 }}
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
        <Row className="my-5" data-aos="fade-up" data-aos-duration="500">
          <Col>
            <Card className="events-intro-card">
              <Card.Body>
                <Card.Title className="events-card-title">
                  Our Events
                </Card.Title>
                <Card.Text className="events-card-text lead">
                  At Thrive, we believe in creating meaningful experiences
                  that bring our community together. Our events showcase the
                  vibrancy of our initiatives, celebrating achievements and
                  fostering connections among our team, partners, and
                  stakeholders.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Slideshow Section */}
        <Row className="my-5" data-aos="fade-up">
          <Col>
            <div className="section-header">
              <h2 className="section-title"> Highlights</h2>
              <p className="section-subtitle">
                Explore moments from our recent events and activities
              </p>
            </div>
            <div className="carousel-wrapper">
              <Carousel
                activeIndex={activeIndex}
                onSelect={handleSelect}
                controls={false}
                indicators={false}
                interval={3000}
                pause={false}
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100 events-carousel-img"
                    src={slide1}
                    alt="Slide 1"
                  />
                  <Carousel.Caption>
                    {/* <h3>Event Moment 1</h3> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 events-carousel-img"
                    src={slide2}
                    alt="Slide 2"
                  />
                  <Carousel.Caption>
                    {/* <h3>Event Moment 2</h3> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 events-carousel-img"
                    src={slide3}
                    alt="Slide 3"
                  />

                  <Carousel.Caption>
                    {/* <h3>Event Moment 3</h3> */}
                  </Carousel.Caption>
                </Carousel.Item>
  
              </Carousel>
              {/* Dot Indicators */}
              <div className="carousel-dots">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${activeIndex === index ? "active" : ""}`}
                    onClick={() => handleSelect(index)}
                  ></span>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* Pictures Section */}
        {/* <Row className="my-5" data-aos="fade-up">
          <Col>
            <div className="section-header">
              <h2 className="section-title">Photo Gallery</h2>
              <p className="section-subtitle">
                Visual memories from our impactful gatherings
              </p>
            </div>
            <Row className="g-4">
              <Col md={4}>
                <div className="gallery-item">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Event 1"
                    className="img-fluid gallery-img"
                  />
                  <div className="gallery-overlay">
                    <p>Community Engagement</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="gallery-item">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Event 2"
                    className="img-fluid gallery-img"
                  />
                  <div className="gallery-overlay">
                    <p>Team Collaboration</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="gallery-item">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Event 3"
                    className="img-fluid gallery-img"
                  />
                  <div className="gallery-overlay">
                    <p>Impact & Growth</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row> */}

        {/* Videos Section */}
        <Row className="my-5" data-aos="fade-up">
          <Col>
            <div className="section-header">
              <h2 className="section-title">Videos</h2>
              <p className="section-subtitle">
                Watch highlights and testimonials from our events
              </p>
            </div>
            <Row>
              <Col md={6}>
                <div className="video-wrapper">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://youtube.com/embed/mA1iXCLRcJw?si=DIA9pRAka_h15bh3"
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
                    src="https://youtube.com/embed/GyGERkIUx2M"
                    title="Sample Video 2"
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
                    src="https://youtube.com/embed/Wg04YeYlIhQ?si=B3Q1whV2D-9AoGlo"
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
