import React from "react";
import ScrollAnimationWrapper from '../../ScrollAnimationWrapper';

const Contact = () => {
  return (
    <div className="container my-5">
      <ScrollAnimationWrapper direction="bottom">
      <div className="text-center">
        <h1 className="col-8 text-center m-auto display-4 fw-bold mb-3 text-primary cursor-pointer text-center my-5 mt-3">Get in Touch</h1>
        <p className="lead text-muted cursor-pointer-only">
          We’d love to hear from you! Please fill out the form below, and we’ll get back to you soon.
        </p>
      </div>
      </ScrollAnimationWrapper>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="form-label cursor-pointer-only">
                Name
              </label>
              <input
                type="text"
                className="form-control shadow-sm"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="form-label cursor-pointer-only">
                Email
              </label>
              <input
                type="email"
                className="form-control shadow-sm"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="form-label cursor-pointer-only">
                Message
              </label>
              <textarea
                className="form-control shadow-sm"
                id="message"
                rows="4"
                placeholder="Write your message"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary px-5 py-2 fw-bold"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-5 text-center">
        <p className="text-muted">Or reach us directly at: <strong>contact@muja.com</strong></p>
      </div>
    </div>
  );
};

export default Contact;
