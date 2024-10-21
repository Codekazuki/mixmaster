import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailCard";

const CocktailCard = ({ image, name, id, info, glass }) => {
  console.log(image);
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={image} alt={info} />
      </div>
    </Wrapper>
  );
};

export default CocktailCard;
