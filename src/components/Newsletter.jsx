import React from "react";
import { IoSendSharp } from "react-icons/io5";
import colors from "../config/colors";

const Newsletter = () => {
  return (
    <section
      style={{ backgroundColor: colors.blue }}
      class="text-light p-4 mb-5 p-sm-3"
    >
      <div class="container overflow-hidden">
        <div class="d-md-flex justify-contents-between align-items-center">
          <h3 class="mb-3 mb-md-0">Sign Up for News Letter</h3>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Enter Email" />
            <button class="btn btn-dark btn-lg" type="button">
              <IoSendSharp />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
