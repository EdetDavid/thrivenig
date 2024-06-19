import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import colors from "../config/colors";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [modalContent, setModalContent] = useState({
    show: false,
    message: "",
    variant: "success",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      // Replace with your API endpoint
      const response = await fetch(
        "https://thrivenig-backend.onrender.com/api/newsletter/",
        // "http://localhost:8000/api/newsletter/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setEmail("");
        setModalContent({
          show: true,
          message: "You have successfully subscribed to the newsletter.",
          variant: "success",
        });
      } else {
        setModalContent({
          show: true,
          message: "Failed to subscribe or email already exists.",
          variant: "danger",
        });
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setModalContent({
        show: true,
        message: "Failed to subscribe. Please try again.",
        variant: "danger",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setModalContent({ ...modalContent, show: false });
  };

  return (
    <div>
      <section className="text-white">
        <div>
          <div
            style={{ backgroundColor: colors.blue }}
            className="black-shadow opacity-100 border-dark d-flex flex-column flex-lg-row justify-content-between align-items-center p-4 p-lg-5"
          >
            <div className="text-center text-lg-start py-3 py-lg-1">
              <h2 className="fw-bold mb-2">Subscribe to our newsletter</h2>
              <p className="mb-0">to keep in touch with us.</p>
            </div>
            <form
              className="d-flex justify-content-center flex-wrap flex-lg-nowrap align-items-center"
              onSubmit={handleSubmit}
            >
              <div className="mt-3 me-lg-2">
                <input
                  className="border rounded-pill shadow-sm form-control"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="my-2 mx-2">
                <button
                  style={{ backgroundColor: colors.red }}
                  className="btn shadow"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Success/Error Modal */}
      <Modal open={modalContent.show} onClose={handleCloseModal} center>
        <h2>{modalContent.variant === "success" ? "Subscribed" : "Error"}</h2>
        <p>{modalContent.message}</p>
        <Button
          style={modalButtonStyles(modalContent.variant)}
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

export default Newsletter;
