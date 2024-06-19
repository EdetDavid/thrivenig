import React from "react";

import BookingForm from "../components/booking-form/BookingForm";

const Home = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-itemsp-center">
        {/* form */}
        <BookingForm />
      </div>
    </div>
  );
};

export default Home;
