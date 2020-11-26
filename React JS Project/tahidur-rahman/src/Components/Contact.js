import React from "react";
import "./Components.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import GoogleMapReact from "google-map-react";

const location = {
  address: "Potiya,Chattagram",
  center: { lat: 22.3169, lng: 91.8855 },
};
const Mylocation = ({ text }) => {
  return (
    <>
      <i className="fas fa-map-marker-alt"></i>
      <h3>{text}</h3>
    </>
  );
};
function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <ContactForm />
        <Map location={location} zoomLevel={13} />
      </div>
    </div>
  );
}

// Contact component

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", messege: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Maximum character exceeded !")
          .required("Required !"),
        lastName: Yup.string()
          .max(15, "Maximum character exceeded !")
          .required("Required !"),
        message: Yup.string()
          .max(50, "Maximum character exceeded !")
          .required("Required !"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Required !"),
      })}
      onSubmit={(values) => console.log(values)}
    >
      <Form className="form">
        <label htmlFor="firstName">Firstname</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" className="error" />
        <label htmlFor="lastName">Lastname</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" className="error" />
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" className="error" />
        <label htmlFor="message">Message</label>
        <Field name="message" as="textarea" type="text" />
        <ErrorMessage name="message" className="error" />
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

// Map component
const Map = ({ location, zoomLevel }) => {
  return (
    <GoogleMapReact
      className="map"
      bootstrapURLKeys={{ key: "AIzaSyA8lbLXQHQBFpLmerTS4B0XVlFPa_G45Ts" }}
      defaultCenter={location.center}
      defaultZoom={zoomLevel}
    >
      <Mylocation
        lat={location.center.lat}
        lng={location.center.lng}
        text={location.address}
      />
    </GoogleMapReact>
  );
};

export default Contact;
