import React from "react";
import About from "./About";
import HomeLayout from "./HomeLayout";
import Landing from "./Landing";
import Cocktail from "./Cocktail";
import Newsletter from "./Newsletter";

const index = () => {
  return (
    <div>
      <About />
      <HomeLayout />
      <Landing />
      <Cocktail />
      <Error />
      <Newsletter />
    </div>
  );
};

export default index;
