import React from "react";
import { Container, Row, Col, Card, Image, Badge } from "react-bootstrap";
import img from "../../assets/images/whatweDO.jpg";
import img1 from "../../assets/images/about.jpg";
import img2 from "../../assets/images/our_mission.jpg";
import img3 from "../../assets/images/our_vision.jpg";
import img4 from "../../assets/images/core-values.jpg";
import img5 from "../../assets/images/offerings.jpg";
import "./About.css";

const AcronymBadge = ({ letter, meaning }) => (
  <div className="d-flex align-items-center">
    <Badge
      id="badge"
      pill
      variant="primary"
      className="mr-4 mb-2 badge"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      {letter} - {meaning}
    </Badge>
  </div>
);

const About = () => {
  return (
    <>
      <div className="header-container">
        <Image src={img} className="header-image w-100 " />
        <div className="header-text  ">Who We Are</div>
      </div>
      <Container className="p-5 overflow-hidden">
        <Row
          className="my-5 align-items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Col md={6}>
            <Image
              className="img-fluid img-thumbnail gray-shadow"
              src={img1}
              fluid
            />
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body className="shadow">
                <Card.Title className="fw-bold"> Who We Are</Card.Title>
                <Card.Text className="text-muted">
                  Thrive Travels and Tours Limited is an IATA certified and
                  NANTA registered Travel Management Company in Nigeria that
                  provides customers with reliable, and personalised travel
                  services. Our aim is to bring you a massive choice of travel
                  products at attractive prices. This ranges over package
                  holidays, tailor made itineraries, scheduled flight, business
                  travel, cruises, car hire and whole wide hotels.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-5 align-items-center" data-aos="fade-up">
          <Col md={{ order: "last", span: 4 }}>
            <Image
              className="img-fluid img-thumbnail gray-shadow"
              src={img2}
              fluid
            />
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body className="shadow">
                <Card.Title className="fw-bold">Our Mission</Card.Title>
                <Card.Text className="text-muted">
                  To provide outstanding travel management services through
                  continous customer evaluation and cutting edge technology .
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row
          className="my-5 align-items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Col md={6}>
            <Image
              className="img-fluid img-thumbnail gray-shadow"
              src={img3}
              fluid
            />
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body className="shadow">
                <Card.Title className="fw-bold">Vision</Card.Title>
                <Card.Text className="text-muted">
                  To be a foremost service provider of excellent travel products
                  and services
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row
          className="my-5 align-items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Col md={6}>
            <Card>
              <Card.Body className="shadow">
                <Card.Title className="fw-bold">Our Offerings</Card.Title>
                <Card.Text className="text-muted">
                  Thrive Travels and Tours Limited is a front-runner and tourism
                  services company in Nigeria. We povide customers with the
                  cheapest available fares for flights, hotels, reservation,
                  visa assistance, vacation packages, and many other travel
                  services. <br /> We offer you the choice of booking on our
                  website, over the telephone or by visiting our office.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Image
              className="img-fluid img-thumbnail gray-shadow"
              src={img5}
              fluid
            />
          </Col>
        </Row>
        {/* Acronym Section */}
        <Row
          className="my-5 align-items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Col md={{ order: "last", span: 4 }}>
            <Image
              className="img-fluid img-thumbnail gray-shadow"
              src={img4}
              fluid
            />
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body className="shadow">
                <Card.Title className="fs-3">Our Core Values</Card.Title>
                <Card.Text>
                  <div>
                    <AcronymBadge letter="P" meaning="Proactive" />
                  </div>
                  <div>
                    <AcronymBadge letter="R" meaning="Reliable" />
                  </div>
                  <div>
                    <AcronymBadge letter="O" meaning="Openness" />
                  </div>
                  <div>
                    <AcronymBadge letter="T" meaning="Team Work" />
                  </div>
                  <div>
                    <AcronymBadge letter="E" meaning="Exceptional Service" />
                  </div>
                  <div>
                    <AcronymBadge letter="C" meaning="Customer Focus" />
                  </div>
                  <div>
                    <AcronymBadge letter="T" meaning="Technology" />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
