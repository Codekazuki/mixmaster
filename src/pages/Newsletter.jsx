import { Form, redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
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
          // required
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
          // required
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
          defaultValue='test@test.com'
          // required
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
