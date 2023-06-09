import React from 'react';
import Form from './Form';

const Contact = () => {
  return (
    <>
      <section className="page-section" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <Form type="text" title="Full Name" message="Enter a Valid Name" id="name" placeholder="Enter your Name" />

                <Form type="email" title="Email" message="Enter a Valid Email" id="email" placeholder="Enter your Email" />

                <Form type="number" title="Phone" message="Enter a Valid Phone Number" id="phone" placeholder="Enter your Phone Number" />

                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    type="text"
                    placeholder="Enter your message here..."
                    style={{ height: '10rem' }}
                    data-sb-validations="required"
                  ></textarea>
                  <label for="message">Message</label>
                  <div className="invalid-feedback" data-sb-feedback="message:required">
                    A message is required.
                  </div>
                </div>

                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                  </div>
                </div>

                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">Error sending message!</div>
                </div>
                <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
