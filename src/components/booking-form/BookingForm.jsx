import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./bookingForm.css";
import { useCookies } from "react-cookie";

const BookingForm = () => {
  const [isFlightBooking, setIsFlightBooking] = useState(true);
  const [isLocal, setIsLocal] = useState(true);
  const [loading, setLoading] = useState(false); // State to track form submission loading status
  const [token, setToken] = useCookies(["mytoken"]);

  const destinations = {
    ABJ: "Abuja",
    LAG: "Lagos",
    KAN: "Kano",
    RIV: "Rivers",
    KAD: "Kaduna",
    ENU: "Enugu",
    ANK: "Anambra",
    BEN: "Benue",
    BOR: "Borno",
    OYO: "Oyo",
    OG: "Ogun",
    EDO: "Edo",
    DEL: "Delta",
    AB: "Abia",
    AD: "Adamawa",
    AK: "Akwa Ibom",
    BA: "Bauchi",
    BY: "Bayelsa",
    CR: "Cross River",
    EB: "Ebonyi",
    EK: "Ekiti",
    GO: "Gombe",
    IM: "Imo",
    JI: "Jigawa",
    KB: "Kebbi",
    KO: "Kogi",
    KW: "Kwara",
    NA: "Nasarawa",
    NI: "Niger",
    ON: "Ondo",
    OS: "Osun",
    PL: "Plateau",
    SO: "Sokoto",
    TA: "Taraba",
    YB: "Yobe",
    ZM: "Zamfara",
  };

  const [flightForm, setFlightForm] = useState({
    departureCity: "LAG",
    arrivalCity: "ABJ",
    departureDate: "",
    returnDate: "",
    adults: 1,
    children: 0,
    infants: 0,
    // travelClass: "economy",
  });

  const [hotelForm, setHotelForm] = useState({
    city: "LAG",
    checkInDate: "",
    checkOutDate: "",
    guests: 1,
    roomType: "standard",
  });

  const navigate = useNavigate();

  const handleFlightChange = (e) => {
    const { name, value } = e.target;
    setFlightForm({
      ...flightForm,
      [name]: value,
    });
  };

  const handleHotelChange = (e) => {
    const { name, value } = e.target;
    setHotelForm({
      ...hotelForm,
      [name]: value,
    });
  };

  const handleFlightSubmit = (e) => {
    e.preventDefault();
    if (!token["mytoken"] || token["mytoken"] === "undefined") {
      navigate("/get-started"); // Redirect to get-started if not authenticated
      return;
    }
    setLoading(true); // Start loading indicator
    axios
      .post(
        // "http://127.0.0.1:8000/api/flight-search",
        "https://thrivenig-backend.onrender.com/api/flight-search/",
        flightForm
      )
      .then((response) => {
        console.log(response.data);
        navigate("/booking-summary", {
          state: { formData: response.data, type: "flight" },
        });
      })
      .catch((error) => console.error("Error fetching flight data: ", error))
      .finally(() => setLoading(false)); // Stop loading indicator
  };

  const handleHotelSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading indicator
    axios
      .post("http://127.0.0.1:8000/api/hotel-search", hotelForm)
      .then((response) => {
        console.log(response.data);
        navigate("/booking-summary", {
          state: { formData: response.data, type: "hotel" },
        });
      })
      .catch((error) => console.error("Error fetching hotel data: ", error))
      .finally(() => setLoading(false)); // Stop loading indicator
  };

  const toggleLocalInternational = () => {
    setIsLocal(!isLocal);
    if (!isLocal) {
      setFlightForm({
        ...flightForm,
        departureCity: "",
        arrivalCity: "",
      });
      setHotelForm({
        ...hotelForm,
        city: "",
      });
    }
  };

  return (
    <div id="booking-form" className="container m-5 px-lg-5 black-shadow">
      <div className="flight-booking-form  p-5">
        <h2>
          <button
            id="flight-btn"
            className={` btn ${
              isFlightBooking ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setIsFlightBooking(true)}
          >
            Book a Flight
          </button>
          <button
            id="hotel-btn"
            className={`btn ${
              !isFlightBooking ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setIsFlightBooking(false)}
          >
            Book a Hotel
          </button>
        </h2>

        <div className="d-md-flex d-sm-block ">
          <div class="form-check m-3">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked={isLocal}
              onChange={toggleLocalInternational}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Local
            </label>
          </div>
          <div class="form-check m-3">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked={!isLocal}
              onChange={toggleLocalInternational}
            />
            <label class="form-check-label" for="flexRadioDefault2">
              International
            </label>
          </div>
        </div>

        {/* Flight Booking Form */}
        {isFlightBooking ? (
          <form onSubmit={handleFlightSubmit} className="row g-3">
            <div className="col-md-4">
              <label htmlFor="departureCity" className="form-label">
                Departure City
              </label>
              {isLocal ? (
                <select
                  id="departureCity"
                  name="departureCity"
                  className="form-select"
                  value={flightForm.departureCity}
                  onChange={handleFlightChange}
                  required
                >
                  <option value="" disabled>
                    Select Departure City
                  </option>
                  {Object.entries(destinations).map(([code, city]) => (
                    <option key={code} value={code}>
                      {city}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  id="departureCity"
                  name="departureCity"
                  className="form-control"
                  value={flightForm.departureCity}
                  onChange={handleFlightChange}
                  placeholder="Enter departure city"
                  required
                />
              )}
            </div>
            <div className="col-md-4">
              <label htmlFor="arrivalCity" className="form-label">
                Arrival City
              </label>
              {isLocal ? (
                <select
                  id="arrivalCity"
                  name="arrivalCity"
                  className="form-select"
                  value={flightForm.arrivalCity}
                  onChange={handleFlightChange}
                  required
                >
                  <option value="" disabled>
                    Select Arrival City
                  </option>
                  {Object.entries(destinations).map(([code, city]) => (
                    <option key={code} value={code}>
                      {city}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  id="arrivalCity"
                  name="arrivalCity"
                  className="form-control"
                  value={flightForm.arrivalCity}
                  onChange={handleFlightChange}
                  placeholder="Enter arrival city"
                  required
                />
              )}
            </div>
            <div className="col-md-2">
              <label htmlFor="departureDate" className="form-label">
                Departure Date
              </label>
              <input
                type="date"
                id="departureDate"
                name="departureDate"
                className="form-control"
                value={flightForm.departureDate}
                onChange={handleFlightChange}
                required
              />
            </div>
            <div className="col-md-2">
              <label htmlFor="returnDate" className="form-label">
                Return Date
              </label>
              <input
                type="date"
                id="returnDate"
                name="returnDate"
                className="form-control"
                value={flightForm.returnDate}
                onChange={handleFlightChange}
              />
            </div>
            <div className="col-md-2">
              <label htmlFor="adults" className="form-label">
                Adults
              </label>
              <input
                type="number"
                id="adults"
                name="adults"
                className="form-control"
                min="1"
                value={flightForm.adults}
                onChange={handleFlightChange}
                required
              />
            </div>
            <div className="col-md-2">
              <label htmlFor="children" className="form-label">
                Children
              </label>
              <input
                type="number"
                id="children"
                name="children"
                className="form-control"
                min="0"
                value={flightForm.children}
                onChange={handleFlightChange}
              />
            </div>
            <div className="col-md-2">
              <label htmlFor="infants" className="form-label">
                Infants
              </label>
              <input
                type="number"
                id="infants"
                name="infants"
                className="form-control"
                min="0"
                value={flightForm.infants}
                onChange={handleFlightChange}
              />
            </div>
            <div className="col-md-12 d-flex justify-content-center">
              {loading ? (
                <button type="submit" className="btn btn-primary" disabled>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  &nbsp;Booking Flight...
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Book Flight
                </button>
              )}
            </div>
          </form>
        ) : (
          <form onSubmit={handleHotelSubmit} className="row g-3">
            {/* Hotel Booking Form */}
            <div className="col-md-4">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="form-control"
                value={hotelForm.city}
                onChange={handleHotelChange}
                placeholder="Enter city"
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="checkInDate" className="form-label">
                Check-In Date
              </label>
              <input
                type="date"
                id="checkInDate"
                name="checkInDate"
                className="form-control"
                value={hotelForm.checkInDate}
                onChange={handleHotelChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="checkOutDate" className="form-label">
                Check-Out Date
              </label>
              <input
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                className="form-control"
                value={hotelForm.checkOutDate}
                onChange={handleHotelChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="guests" className="form-label">
                Guests
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                className="form-control"
                min="1"
                value={hotelForm.guests}
                onChange={handleHotelChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="roomType" className="form-label">
                Room Type
              </label>
              <select
                id="roomType"
                name="roomType"
                className="form-select"
                value={hotelForm.roomType}
                onChange={handleHotelChange}
              >
                <option value="standard">Standard</option>
                <option value="deluxe">Deluxe</option>
                <option value="suite">Suite</option>
              </select>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
              {loading ? (
                <button type="submit" className="btn btn-primary" disabled>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  &nbsp;Booking Hotel...
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Book Hotel
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
