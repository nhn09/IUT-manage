import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React from "react";

const AddCourse = ( { submitHandler,semester}) => {
  const initialValues = {
    totalEnrolled: 0,
    title: '',
    coursecode: '',
    courseTeacher: '',
    description: '',
    rating: 0,
    courseCreationDate: 0,
    mail: '',
    semester: +parseInt(semester),
    chapters: [
      {
        name: '',
        isCompletedByTeacher: false,
        date: 0,
      },
    ],
  };

  return (
    <div className="flex justify-center">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          //console.log(JSON.stringify(values, null, 2));
          submitHandler(values)
          
        }}
      >
        {({ values }) => (
          <Form className=" m-3 space-y-4 mx-12 w-1/2 p-4 bg-gray-200 rounded-md shadow-sm -space-y-px grid ">
            <div className="flex justify-center">
              <p className=" p-4 font-bold text-2xl text-gray-700  text-center">
                Add course
              </p>
            </div>

            <label
              className="cols-span-12 block text-sm font-medium text-gray-700"
              htmlFor="title"
            >
              title
            </label>
            <Field
            required
              className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="title"
              name="title"
              placeholder="title"
            />
            <div className="flex justify-between">
              {" "}
              <div>
              <label
                className="cols-span-12 block text-sm font-medium text-gray-700"
                htmlFor="totalEnrolled"
              >
                totalEnrolled
              </label>
              <Field
              required
                className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                id="totalEnrolled"
                type="number"
                name="totalEnrolled"
              />
              </div>
        <div>
        <label
                className="cols-span-12 block text-sm font-medium text-gray-700"
                htmlFor=""
                coursecode
              >
                coursecode
              </label>
              <Field
                className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                id="coursecode"
                name="coursecode"
                placeholder="coursecode"
                required
              />
        </div>
            </div>

            <div className='m-3 py-3'>
            <label
              className="cols-span-12 block text-sm font-medium text-gray-700"
              htmlFor="courseTeacher"
            >
              courseTeacher
            </label>
            <Field
            required
              className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="courseTeacher"
              name="courseTeacher"
              placeholder="courseTeacher"
            />
            </div>

           <div  className='m-3 py-3'>
           <label
              className="cols-span-12 block text-sm font-medium text-gray-700"
              htmlFor="description"
            >
              description
            </label>
            <Field
            required
              className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="description"
              as="textarea"
              name="description"
              placeholder="description"

            />
           </div>

          <div className='m-3 py-3'>
          <label
              className="cols-span-12 block text-sm font-medium text-gray-700"
              htmlFor="mail"
            >
              mail
            </label>
            <Field
            required
              className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="mail"
              name="mail"
              placeholder="mail"
            />
          </div>

          

            <FieldArray name="chapters">
              {({ insert, remove, push }) => (
                <div className=' p-3 my-3'>
                  {values.chapters.length > 0 &&
                    values.chapters.map((course, index) => (
                      <div className='m-3 bg-gray-300' key={index}>
                        <div className='m-3 py-3'>
                          <label
                            className="cols-span-12 block text-sm font-medium text-gray-700"
                            htmlFor={`chapters.${index}.name`}
                          >
                            Name
                          </label>
                          <Field
                            name={`chapters.${index}.name`}
                            required
                            placeholder="Thermodynamics"
                            type="text"
                            className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                          <ErrorMessage
                            name={`friends.${index}.name`}
                            component="div"
                            className="field-error"
                          />
                        </div>
                        <div className='m-3 py-3'>
                          <label
                            className="cols-span-12 block text-sm font-medium text-gray-700"
                            
                            htmlFor={`chapters.${index}.isCompletedByTeacher`}
                          >
                            Completed?
                            <Field
                              name={`chapters.${index}.isCompletedByTeacher`}
                              
                              type="checkbox"
                              className="mt-1 p-2 focus:ring-indigo-500 checked:bg-indigo-500 block w-8 shadow-sm rounded-md"
                            />
                          </label>
                          <ErrorMessage
                            name={`chapters.${index}.isCompletedByTeacher`}
                            component="div"
                            className="field-error"
                          />
                        </div>

                        <div className='m-3 py-3'>
                          <label
                            className="cols-span-12 block text-sm font-medium text-gray-700"
                            htmlFor={`chapters.${index}.date`}
                          >
                            Date
                            <Field
                              name={`chapters.${index}.date`}
                              type="date"
                              className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </label>
                          <ErrorMessage
                            name={`chapters.${index}.date`}
                            component="div"
                            className="field-error"
                          />
                        </div>

                        <div className="col">
                          <button
                            type="button"
                            className="hover:bg-red-500 bg-red-300 p-3 m-2 rounded-full"
                            onClick={() => remove(index)}
                          >
                           remove
                          </button>
                        </div>
                      </div>
                    ))}
<div className='flex justify-center'>
<button
                    type="button"
                    className="bg-gray-400 hover:bg-gray-500 text-gray-50  p-2 rounded-full"
                    onClick={() =>
                      push({ name: '', isCompletedByTeacher: false, date: 0 })
                    }
                  >
                    Add chapter
                  </button>
</div>
               
                </div>
              )}
            </FieldArray>
            <button
             className="m-3 bg-gray-600 hover:bg-gray-700 text-gray-50 p-2 rounded-full"
             type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddCourse;
