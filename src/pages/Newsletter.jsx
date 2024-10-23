import React from "react";

const Newsletter = () => {
  return (
    <form className='form'>
      <h4
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1.5rem",
        }}
      >
        our newsletter
      </h4>
      <div classNameform-row>
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
      <div classNameform-row>
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

      <div classNameform-row>
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
    </form>
  );
};

export default Newsletter;
