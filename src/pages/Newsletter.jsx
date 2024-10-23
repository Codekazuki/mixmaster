import React from "react";
import { Form } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return null;
};

const Newsletter = () => {
  return (
    <Form className='form' method='POST'>
      <h4
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1.5rem",
        }}
      >
        our newsletter
      </h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          name='name'
          className='form-input'
          id='name'
          defaultValue='Ayo'
        />
      </div>
      <div className='form-row'>
        <label htmlFor='last name' className='form-label'>
          last name
        </label>
        <input
          type='text'
          name='lastName'
          className='form-input'
          id='lastName'
          defaultValue='Femi'
        />
      </div>

      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='text'
          name='email'
          className='form-input'
          id='email'
          defaultValue='agbowurotoyin8@gmail.com'
        />
      </div>
      <button
        style={{
          marginTop: "1rem",
        }}
        className='btn btn-block'
        type='submit'
      >
        Submit
      </button>
    </Form>
  );
};

export default Newsletter;
