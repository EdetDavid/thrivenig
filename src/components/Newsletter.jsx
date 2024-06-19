import React from "react";

import colors from "../config/colors";
const Newsletter = () => {
  return (
    <div className="container">
      <section class="py-5 text-white">
        <div class="container">
          <div
            style={{ backgroundColor: colors.blue }}
            class="  black-shadow opacity-100 rounded border-dark d-flex flex-column justify-content-between align-items-center flex-lg-row p-4 p-lg-5"
          >
            <div class="text-center text-lg-start py-3 py-lg-1">
              <h2 class="fw-bold mb-2 ">Subscribe to our newsletter</h2>
              <p class="mb-0">to keep in touch with us.</p>
            </div>
            <form
              class="d-flex justify-content-center flex-wrap flex-lg-nowrap"
              method="post"
            >
              <div class="my-2">
                <input
                  class="border rounded-pill shadow-sm form-control"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
              <div class="my-2">
                <button
                  style={{ backgroundColor: colors.red }}
                  class="btn  shadow ms-2"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
