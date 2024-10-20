import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  if (error === 404) {
    return (
      <div>
        <h1>oops</h1>
        <h4>There was an error</h4>
        <img src={img} alt='not found' />
        <Link to='/'>Go back home</Link>
      </div>
    );
  }
  return (
    <div>
      <h1>something went wrong</h1>
      <h4>check back later </h4>
      <Link to='/'>Go back home</Link>
    </div>
  );
};

export default Error;
