import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data);
    toast.success("you are subscribed");
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmittig = navigation.state === "submitting";
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
          required
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
          required
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
          required
        />
      </div>
      <button
        style={{
          marginTop: "1rem",
        }}
        className='btn btn-block'
        type='submit'
        disabled={isSubmittig}
      >
        {isSubmittig ? "submitting" : "submit"}
      </button>
    </Form>
  );
};

export default Newsletter;
