import React, { useState } from "react";

import colors from "../../config/colors";

import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="row bg-dark">
      {/* col-1 */}

      <div className="col-md-6 bg-dark text-white">
        <div
          data-aos="fade-up-right"
          className="d-flex flex-column my-5 py-5 justify-content-center align-items-center"
        >
          <h2
            style={{ fontWeight: "600", fontFamily: "Gothic" }}
            class="text-center mb-4 "
          >
            Contact Info
          </h2>
          <ul class="list-group-flush f-5">
            <li class="list-group-item">
              <span class="fw-bold">Main Location:</span> Western House, 17th
              Floor, Wing C, 8-10 Broad St, Lagos Island, Lagos
            </li>
            <li class="list-group-item">
              <span class="fw-bold">Phone:</span> +234 818-099-6418, +234
              818-045-2805
            </li>
            <li class="list-group-item text-info">
              <span class="fw-bold text-white">Email: </span>
              infoinsurance@thrivenig.com
            </li>
          </ul>
        </div>
      </div>

      {/* col-2 */}
      <div className="col-md-6">
        <div
          id="contact"
          className="d-flex flex-column text-white bg-dark w-100 mb-5"
        >
          <div data-aos="fade-up-left" className="container">
            <h2 className="text-center my-3">Contact Us</h2>
            <form id="form" className="mx-auto" onSubmit={handleSubmit}>
              <div className="mb-3 ">
                <label htmlFor="name" className="form-label ms-2">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 ">
                <label htmlFor="email" className="form-label ms-2">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control "
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 ">
                <label htmlFor="message" className="form-label ms-2">
                  Message
                </label>
                <textarea
                  className="form-control "
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                style={{ backgroundColor: colors.blue }}
                type="submit"
                className="btn text-white my-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
