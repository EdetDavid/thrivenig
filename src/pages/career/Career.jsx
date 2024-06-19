import React, { useState } from "react";
import "./Career.css";
// const response = await fetch("https://your-api-endpoint.com/submit");
const response = "";
const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cv: null,
    coverLetter: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("cv", formData.cv);
    formDataToSend.append("coverLetter", formData.coverLetter);

    try {
      const response = await fetch("https://your-api-endpoint.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setMessage("Your application has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          cv: null,
          coverLetter: "",
        });
      } else {
        setMessage(
          "There was an error submitting your application. Please try again."
        );
      }
    } catch (error) {
      setMessage(
        "There was an error submitting your application. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="career d-flex flex-column justify-content-end align-items-center p-5">
        <h1 className="fw-bold display-1 secondary-color-text black-text-shadow">
          Career
        </h1>
        <p className="lead text-white black-text-shadow w-50 text-center fw-bolder">
          We're assembling an exceptional team of individuals. If you're
          inquisitive, ambitious, and eager to advance your career alongside us,
          we're excited to connect with you!
        </p>
      </div>

      <div className="benefits-section text-center py-5">
        <h2 className="fw-bold display-4 primary-color-text">
          Benefits of Joining Our Team
        </h2>
        <ul className="list-unstyled secondary-color-text w-50 mx-auto">
          <li className="py-2">🌟 Competitive Salary</li>
          <li className="py-2">🌟 Health and Wellness Programs</li>
          <li className="py-2">🌟 Professional Development Opportunities</li>
          <li className="py-2">🌟 Flexible Working Hours</li>
          <li className="py-2">🌟 Collaborative Work Environment</li>
          <li className="py-2">🌟 Career Growth and Advancement</li>
        </ul>
      </div>

      <div className="submit-cv-section text-center py-5">
        <h2 className="fw-bold display-4 primary-color-text">Submit Your CV</h2>
        <p className="lead secondary-color-text black-text-shadow w-50 mx-auto">
          Ready to take the next step in your career? Submit your CV and a cover
          letter to us. We look forward to reviewing your application!
        </p>
        {message && (
          <div
            className={`alert ${
              response?.ok ? "alert-success" : "alert-danger"
            }`}
            role="alert"
          >
            {message}
          </div>
        )}
        <form className="w-50 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label primary-color-text">
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
          <div className="mb-3">
            <label htmlFor="email" className="form-label primary-color-text">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cv" className="form-label primary-color-text">
              Upload CV
            </label>
            <input
              type="file"
              className="form-control"
              id="cv"
              name="cv"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="coverLetter"
              className="form-label primary-color-text"
            >
              Cover Letter
            </label>
            <textarea
              className="form-control"
              id="coverLetter"
              name="coverLetter"
              rows="3"
              value={formData.coverLetter}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-secondary"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Career;
