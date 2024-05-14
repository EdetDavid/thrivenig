// Modal.js
import React, { useRef, useEffect } from "react";
import { BsTwitter, BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

const Modal = ({ member, closeModal, membersLong }) => {
  const detailedMember = membersLong.find((m) => m.name === member.name);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [closeModal]);

  return (
    <div className="container">
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div
            className="modal-content overflow-auto"
            ref={modalRef}
            style={{
              margin: "50px auto",
              padding: "50px 0",
              maxHeight: "600px",
            }}
          >
            <div className="modal-header">
              <h5 className="modal-title">{member.name}</h5>
              <button
                type="button"
                className="close p-1 border-0 bg-white"
                onClick={closeModal}
                aria-label="Close"
              >
                <span className="fs-5" aria-hidden="true">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body" style={{ overflowY: "auto" }}>
              <div className="text-center">
                <img
                  src={member.image}
                  className="img-fluid rounded-circle w-50 mb-4"
                  alt=""
                />
                <p className="text-muted">{detailedMember.description}</p>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#home">
                  <BsTwitter className="text-dark mx-2" />
                </a>
                <a href="#home">
                  <BsFacebook className="text-dark mx-2" />
                </a>
                <a href="#home">
                  <BsLinkedin className="text-dark mx-2" />
                </a>
                <a href="#home">
                  <BsInstagram className="text-dark mx-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
