import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt='not found' />
          <h3>oops</h3>
          <p>The page does not exist</p>

          <Link to='/'>Go back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h1>something went wrong</h1>
        <h4>check back later </h4>
        <Link to='/'>Go back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
