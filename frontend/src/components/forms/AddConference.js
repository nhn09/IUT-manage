import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";

const AddConference = ({ setShowform }) => (
  <div className="flex justify-center">
    <div>
      <p className=" p-4 font-bold text-2xl text-gray-700  text-center">
        Add conference
      </p>
    </div>
    <Formik
      initialValues={{
        Title: "",
        Description: "",
        Date: 0,
        Location: "",
        Cost: 0,
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        axios
          .post(`http://localhost:5000/conferences`, values)
          .then((response) => {
            setShowform(false);
          })
          .catch((error) => console.log(error));
      }}
    >
      <Form className=" m-3 space-y-4 mx-12 w-1/2 p-4 bg-gray-200 rounded-md shadow-sm -space-y-px grid ">
        <div className="m-3 py-3">
          <label htmlFor="Title">Title</label>
          <Field
            className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
            id="Title"
            name="Title"
            placeholder="Title"
          />
        </div>
        <div className="m-3 py-3">
          <label htmlFor="Description">Description</label>
          <Field
            className="mt-1 h-24 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
            type="textarea"
            id="Description"
            name="Description"
            placeholder="Description"
          />
        </div>
        <div className="m-3 py-3">
          <label htmlFor="Date">Date</label>
          <Field
            id="Date"
            name="Date"
            placeholder="24/7/21"
            className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            type="date"
            required
          />
        </div>
        <div className="m-3 py-3">
          <label htmlFor="Location">Location</label>
          <Field
            className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
            id="Location"
            name="Location"
            placeholder="Location"
          />
        </div>
        <div className="m-3 py-3">
          <label htmlFor="Cost">Cost</label>
          <Field
            className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
            id="Cost"
            name="Cost"
          />
        </div>

        <div className="flex justify-center">
          <button
            className="bg-gray-400 hover:bg-gray-500 text-gray-50  p-2 rounded-full"
            type="submit"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  </div>
);

export default AddConference;
