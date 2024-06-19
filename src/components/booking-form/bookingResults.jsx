import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bookingResults.css"; // Include your custom styles if needed

const BookingResults = () => {
  const location = useLocation();
  const [flightOffers, setFlightOffers] = useState([]);
  const [predictionFlights, setPredictionFlights] = useState([]);
  const [tripDetails, setTripDetails] = useState({});

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = location.state.formData;
        setFlightOffers(response.response);
        setPredictionFlights(response.prediction);
        setTripDetails({
          origin: response.origin,
          destination: response.destination,
          departureDate: response.departureDate,
          returnDate: response.returnDate,
          tripPurpose: response.tripPurpose,
        });
      } catch (error) {
        console.error("Error fetching results: ", error);
      }
    };
    fetchResults();
  }, [location.state.formData]);

  const renderTooltip = (props, content) => (
    <Tooltip id="button-tooltip" {...props}>
      {content}
    </Tooltip>
  );

  return (
    <div className="container mt-5">
      <h3 className="login-heading mb-4 mt-4 pl-3">
        {tripDetails.origin} ✈ {tripDetails.destination}
        <br />
        {tripDetails.departureDate}
        {tripDetails.returnDate && (
          <>
            {" "}
            <span className="text-info">↔</span> {tripDetails.returnDate}
          </>
        )}
      </h3>
      {tripDetails.tripPurpose && (
        <h4 className="login-heading mb-4 mt-4 pl-3">
          Flying for{" "}
          <span style={{ fontSize: 26, color: "darkred" }}>
            {tripDetails.tripPurpose}
          </span>{" "}
          purposes
        </h4>
      )}

      <div className="row">
        <div className="col-md-6">
          <h3 className="login-heading mb-4 text-left">FLIGHT OFFERS SEARCH</h3>
          {flightOffers.map((offer, index) => (
            <div key={index} className="card mb-3 text-center">
              <div
                className="card-header text-center"
                style={{ fontSize: 26, color: "darkred" }}
              >
                ${offer.price}
              </div>
              <div className="card-body">
                <div className="card-text">
                  <h4 className="font-weight-light text-info pb-3">
                    Departure{" "}
                    <span className="smallstyle">
                      Total duration {offer["0FlightTotalDuration"]}
                    </span>
                  </h4>
                  <h4>
                    <img
                      src={offer["0firstFlightAirlineLogo"]}
                      alt={offer["0firstFlightAirline"]}
                    />{" "}
                    {offer["0firstFlightDepartureDate"]}{" "}
                    {offer["0firstFlightDepartureAirport"]}
                    <OverlayTrigger
                      placement="top"
                      overlay={(props) =>
                        renderTooltip(
                          props,
                          offer["0firstFlightArrivalDuration"]
                        )
                      }
                    >
                      <a href="#" className="nounderline text-info">
                        &#10230;
                      </a>
                    </OverlayTrigger>{" "}
                    {offer["0firstFlightArrivalAirport"]}{" "}
                    {offer["0firstFlightArrivalDate"]}
                  </h4>
                  {offer["0secondFlightDepartureAirport"] && (
                    <>
                      <p className="nounderline elegantstyle">
                        Connection duration is {offer["0stop_time"]}
                      </p>
                      <h4>
                        <img
                          src={offer["0secondFlightAirlineLogo"]}
                          alt={offer["0secondFlightAirline"]}
                        />{" "}
                        {offer["0secondFlightDepartureDate"]}{" "}
                        {offer["0secondFlightDepartureAirport"]}
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) =>
                            renderTooltip(
                              props,
                              offer["0secondFlightArrivalDuration"]
                            )
                          }
                        >
                          <a href="#" className="nounderline text-info">
                            &#10230;
                          </a>
                        </OverlayTrigger>{" "}
                        {offer["0secondFlightArrivalAirport"]}{" "}
                        {offer["0secondFlightArrivalDate"]}
                      </h4>
                    </>
                  )}
                  {offer["1firstFlightDepartureAirport"] && (
                    <>
                      <hr className="newstyle" />
                      <h4 className="font-weight-light text-info pb-3">
                        Return{" "}
                        <span style={{ color: "black", fontSize: 15 }}>
                          Total duration {offer["1FlightTotalDuration"]}
                        </span>
                      </h4>
                      <h4>
                        <img
                          src={offer["1firstFlightAirlineLogo"]}
                          alt={offer["1firstFlightAirline"]}
                        />{" "}
                        {offer["1firstFlightDepartureDate"]}{" "}
                        {offer["1firstFlightDepartureAirport"]}
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) =>
                            renderTooltip(
                              props,
                              offer["1firstFlightArrivalDuration"]
                            )
                          }
                        >
                          <a href="#" className="nounderline text-info">
                            &#10230;
                          </a>
                        </OverlayTrigger>{" "}
                        {offer["1firstFlightArrivalAirport"]}{" "}
                        {offer["1firstFlightArrivalDate"]}
                      </h4>
                      {offer["1secondFlightDepartureAirport"] && (
                        <>
                          <p className="nounderline elegantstyle">
                            Connection duration is {offer["1stop_time"]}
                          </p>
                          <h4>
                            <img
                              src={offer["1secondFlightAirlineLogo"]}
                              alt={offer["1secondFlightAirline"]}
                            />{" "}
                            {offer["1secondFlightDepartureDate"]}{" "}
                            {offer["1secondFlightDepartureAirport"]}
                            <OverlayTrigger
                              placement="top"
                              overlay={(props) =>
                                renderTooltip(
                                  props,
                                  offer["1secondFlightArrivalDuration"]
                                )
                              }
                            >
                              <a href="#" className="nounderline text-info">
                                &#10230;
                              </a>
                            </OverlayTrigger>{" "}
                            {offer["1secondFlightArrivalAirport"]}{" "}
                            {offer["1secondFlightArrivalDate"]}
                          </h4>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-6">
          <h3 className="login-heading mb-4 text-left">
            FLIGHT CHOICE PREDICTION
          </h3>
          {predictionFlights.map((offer, index) => (
            <div key={index} className="card mb-3 text-center">
              <div
                className="card-header text-center"
                style={{ fontSize: 26, color: "darkred" }}
              >
                ${offer.price} with {offer.probability}
              </div>
              <div className="card-body">
                <div className="card-text">
                  <h4 className="font-weight-light text-info pb-3">
                    Departure{" "}
                    <span style={{ color: "black", fontSize: 15 }}>
                      Total duration {offer["0FlightTotalDuration"]}
                    </span>
                  </h4>
                  <h4>
                    <img
                      src={offer["0firstFlightAirlineLogo"]}
                      alt={offer["0firstFlightAirline"]}
                    />{" "}
                    {offer["0firstFlightDepartureDate"]}{" "}
                    {offer["0firstFlightDepartureAirport"]}
                    <OverlayTrigger
                      placement="top"
                      overlay={(props) =>
                        renderTooltip(
                          props,
                          offer["0firstFlightArrivalDuration"]
                        )
                      }
                    >
                      <a href="#" className="nounderline text-info">
                        &#10230;
                      </a>
                    </OverlayTrigger>{" "}
                    {offer["0firstFlightArrivalAirport"]}{" "}
                    {offer["0firstFlightArrivalDate"]}
                  </h4>
                  {offer["0secondFlightDepartureAirport"] && (
                    <>
                      <p className="nounderline elegantstyle">
                        Connection duration is {offer["0stop_time"]}
                      </p>
                      <h4>
                        <img
                          src={offer["0secondFlightAirlineLogo"]}
                          alt={offer["0secondFlightAirline"]}
                        />{" "}
                        {offer["0secondFlightDepartureDate"]}{" "}
                        {offer["0secondFlightDepartureAirport"]}
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) =>
                            renderTooltip(
                              props,
                              offer["0secondFlightArrivalDuration"]
                            )
                          }
                        >
                          <a href="#" className="nounderline text-info">
                            &#10230;
                          </a>
                        </OverlayTrigger>{" "}
                        {offer["0secondFlightArrivalAirport"]}{" "}
                        {offer["0secondFlightArrivalDate"]}
                      </h4>
                    </>
                  )}
                  {offer["1firstFlightDepartureAirport"] && (
                    <>
                      <hr className="newstyle" />
                      <h4 className="font-weight-light text-info pb-3">
                        Return{" "}
                        <span style={{ color: "black", fontSize: 15 }}>
                          Total duration {offer["1FlightTotalDuration"]}
                        </span>
                      </h4>
                      <h4>
                        <img
                          src={offer["1firstFlightAirlineLogo"]}
                          alt={offer["1firstFlightAirline"]}
                        />{" "}
                        {offer["1firstFlightDepartureDate"]}{" "}
                        {offer["1firstFlightDepartureAirport"]}
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) =>
                            renderTooltip(
                              props,
                              offer["1firstFlightArrivalDuration"]
                            )
                          }
                        >
                          <a href="#" className="nounderline text-info">
                            &#10230;
                          </a>
                        </OverlayTrigger>{" "}
                        {offer["1firstFlightArrivalAirport"]}{" "}
                        {offer["1firstFlightArrivalDate"]}
                      </h4>
                      {offer["1secondFlightDepartureAirport"] && (
                        <>
                          <p className="nounderline elegantstyle">
                            Connection duration is {offer["1stop_time"]}
                          </p>
                          <h4>
                            <img
                              src={offer["1secondFlightAirlineLogo"]}
                              alt={offer["1secondFlightAirline"]}
                            />{" "}
                            {offer["1secondFlightDepartureDate"]}{" "}
                            {offer["1secondFlightDepartureAirport"]}
                            <OverlayTrigger
                              placement="top"
                              overlay={(props) =>
                                renderTooltip(
                                  props,
                                  offer["1secondFlightArrivalDuration"]
                                )
                              }
                            >
                              <a href="#" className="nounderline text-info">
                                &#10230;
                              </a>
                            </OverlayTrigger>{" "}
                            {offer["1secondFlightArrivalAirport"]}{" "}
                            {offer["1secondFlightArrivalDate"]}
                          </h4>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingResults;
