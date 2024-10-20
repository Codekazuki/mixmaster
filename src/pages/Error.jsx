import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
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
  return <div>Error</div>;
};

export default Error;
