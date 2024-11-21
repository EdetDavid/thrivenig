import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-responsive-modal";
import "./Career.css";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cv: null,
    coverLetter: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalVariant, setModalVariant] = useState("success");

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
    setModalMessage("");

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("cv", formData.cv);
    formDataToSend.append("cover_letter", formData.coverLetter);

    try {
      const response = await fetch(
        // "https://thrivenig-backend.onrender.com/api/submit-cv/",
        "http://localhost:9000/api/submit-cv/",

        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        setModalMessage("Your application has been submitted successfully!");
        setModalVariant("success");
        setFormData({
          name: "",
          email: "",
          cv: "",
          coverLetter: "",
        });
      } else {
        setModalMessage(
          "There was an error submitting your application. Please try again."
        );
        setModalVariant("danger");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      setModalMessage(
        "There was an error submitting your application. Please try again."
      );
      setModalVariant("danger");
    } finally {
      setIsLoading(false);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
        <p id="submit-cv" className="lead secondary-color-text w-50 mx-auto">
          Ready to take the next step in your career? Submit your CV and a cover
          letter to us. We look forward to reviewing your application!
        </p>

        <form id="career-form" className="mx-auto" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">
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
            <label htmlFor="email" className="form-label text-white">
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
            <label htmlFor="cv" className="form-label text-white">
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
            <label htmlFor="coverLetter" className="form-label text-white">
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
            className="btn btn-danger career-btn"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      {/* Success/Error Modal */}
      <Modal open={showModal} onClose={handleCloseModal} center>
        <h2>
          {modalVariant === "success" ? "Application Submitted" : "Error"}
        </h2>
        <p>{modalMessage}</p>
        <Button
          style={modalButtonStyles(modalVariant)}
          onClick={handleCloseModal}
        >
          Close
        </Button>
      </Modal>
    </div>
  );
};

const modalButtonStyles = (variant) => ({
  backgroundColor: variant === "success" ? "#28a745" : "#dc3545",
  borderColor: variant === "success" ? "#28a745" : "#dc3545",
  color: "#ffffff",
  transition: "background-color 0.3s",
});

export default Career;
