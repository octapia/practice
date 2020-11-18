import React from "react";
import "./Demo.css";
import { useFormik } from "formik";

const initialValues = {
  name: "Tahid",
  email: "",
  channel: "",
};
const onSubmit = (values) => console.log("Form Data : ", values);

const validate = (values) => {
  let error = {};
  if (!values.name) error.name = "Required !";
  if (!values.email) {
    error.email = "Required !";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)) {
    error.email = "Invalid Email !";
  }
  if (!values.channel) {
    error.channel = "Required !";
  }
  return error;
};

export default function YoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
console.log(formik.touched)
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            name="name"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error"><i className="fa fa-exclamation"></i> {formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error"><i className="fa fa-exclamation"></i> {formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel : </label>
          <input
            type="text"
            id="channel"
            name="channel"
            {...formik.getFieldProps('channel')}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error"><i className="fa fa-exclamation"></i> {formik.errors.channel}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
