import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const displaySearchTerm = searchTerm !== "a" ? searchTerm : "";
  return (
    <Wrapper>
      <Form className='form'>
        <input
          type='search'
          name='search'
          className='form-input'
          defaultValue={displaySearchTerm}
        />
        <button type='submit' disabled={isSubmitting} className='btn'>
          {isSubmitting ? "submitting" : "submit"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
