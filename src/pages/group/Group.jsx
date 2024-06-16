import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

import group from "../../assets/images/chart.png";

import "./Group.css";

const Group = () => {
  return (
    <>
      <div
        style={{ height: 400, marginBottom: 20 }}
        className="header-container w-100 "
      >
        <div
          class="d-flex justify-content-center align-items-center"
          id="animatedTextBackground"
        >
          <h1 id="animatedTextHeading" className="verticallly-middle">
            Our Group
          </h1>
        </div>
      </div>

      <div id="gutter" className="d-flex"></div>
      <Container>
        {/* Row 1 */}
        <Row data-aos="fade-up" className="my-5">
          <Col>
            <Card>
              <Card.Body className="border-none red-shadow p-4">
                <Card.Title className=" font-bold fs-3">About Us</Card.Title>
                <Card.Text className="lead">
                  Welcome to our company! We are dedicated to providing the best
                  services and solutions to our customers. Our team of
                  professionals is committed to excellence and innovation,
                  ensuring that we meet and exceed your expectations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Row 2 */}
        <Row data-aos="fade-up" className="my-5">
          <Col>
            <Card>
              <Card.Body className="blue-shadow  p-4">
                <Card.Title className=" font-bold fs-3">Our Mission</Card.Title>
                <Card.Text className="lead">
                  To provide outstanding insurance intermediation service
                  through continous customer evaluation and cutting edge
                  technology
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Row 3 */}
        <Row data-aos="fade-up" className="mt-5">
          <Col>
            <Card>
              <Card.Body className="gray-shadow p-4">
                <Card.Title className=" font-bold fs-3">Vision</Card.Title>
                <Card.Text className="lead font-bold">
                  To be a thought leader in the industry in Africa while
                  delivering superior services to our clients.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row data-aos="fade-up m-0 p-0">
          <Image width={400} height={400} className="img-fluid" src={group} />
        </Row>
      </Container>
    </>
  );
};

export default Group;
