import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

// Logo
import Github from "../assets/icon-github.svg";
import Mentor from "../assets/icon-frontend-mentor.svg";
import Linkedln from "../assets/icon-linkedin.svg";
import Twitter from "../assets/icon-twitter.svg";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer container">
        <div className="footer-content">
          <h3 className="heading-xl">Contact</h3>
          <p className="body-text">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Formik */}
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name cannot be blank."),
            email: Yup.string()
              .email("Sorry,invalid format here")
              .required("Email cannot be blank."),
            message: Yup.string().required("Message cannot be blank."),
          })}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            setTimeout(() => {
              resetForm();
            }, 1000);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleReset,
            handleSubmit,
            dirty,
            touched,
          }) => (
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-control">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="NAME"
                  value={values.name}
                  onChange={handleChange}
                  className={`${
                    touched.name ? (errors.name ? "false-input" : "valid-input") : ""
                  }`}
                />
                {errors.name && touched.name && (
                  <p className="error-message">{errors.name}</p>
                )}
                {errors.name && touched.name && (
                  <svg
                    className="error-image"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="11.5" stroke="#FF6F5B" />
                    <rect
                      x="11"
                      y="6"
                      width="2"
                      height="9"
                      rx="1"
                      fill="#FF6F5B"
                    />
                    <rect
                      x="11"
                      y="17"
                      width="2"
                      height="2"
                      rx="1"
                      fill="#FF6F5B"
                    />
                  </svg>
                )}
              </div>

              <div className="form-control">
                <input
                  id="email"
                  name="email"
                  placeholder="EMAIL"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  className={`${
                    touched.name ? (errors.name ? "false-input" : "valid-input") : ""
                  }`}
                />
                {errors.email && touched.email && (
                  <p className="error-message">{errors.email}</p>
                )}
                {errors.email && touched.email && (
                  <svg
                    className="error-image"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="11.5" stroke="#FF6F5B" />
                    <rect
                      x="11"
                      y="6"
                      width="2"
                      height="9"
                      rx="1"
                      fill="#FF6F5B"
                    />
                    <rect
                      x="11"
                      y="17"
                      width="2"
                      height="2"
                      rx="1"
                      fill="#FF6F5B"
                    />
                  </svg>
                )}
              </div>

              <div className="form-control">
                <textarea
                  id="message"
                  name="message"
                  placeholder="MESSAGE"
                  value={values.message}
                  onChange={handleChange}
                  className={`${
                    touched.name ? (errors.name ? "false-input" : "valid-input") : ""
                  }`}
                ></textarea>
                {errors.message && touched.message && (
                  <p className="error-message">{errors.message}</p>
                )}
                {errors.message && touched.message && (
                  <svg
                    className="error-image"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="11.5" stroke="#FF6F5B" />
                    <rect
                      x="11"
                      y="6"
                      width="2"
                      height="9"
                      rx="1"
                      fill="#FF6F5B"
                    />
                    <rect
                      x="11"
                      y="17"
                      width="2"
                      height="2"
                      rx="1"
                      fill="#FF6F5B"
                    />
                  </svg>
                )}
              </div>

              <button type="submit" className="contact">
                Send Message
              </button>
            </form>
          )}
        </Formik>
      </div>
      <nav className="navigation container">
        <div className="logo">
          <h3 className="logo-text">adamkeyes</h3>
        </div>
        <ul className="links">
          <li>
            <a href="#">
              <img src={Github} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Mentor} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Linkedln} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Twitter} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
