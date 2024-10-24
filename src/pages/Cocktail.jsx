import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";
import axios from "axios";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  return { id, data };
};

const Cocktail = () => {
  const { id, data } = useLoaderData();
  const singleDrink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strCategory: category,
    strGlass: glass,
    strAlcoholic: info,
    strInstructions: instruction,
  } = singleDrink;
  const validIngredient = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);

  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className='drink'>
        <img src={image} alt={name} className='img' />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name: </span>
            {name}
          </p>
          <p>
            <span className='drink-data'>info: </span>
            {info}
          </p>
          <p>
            <span className='drink-data'>category: </span>
            {category}
          </p>
          <p>
            <span className='drink-data'>glass: </span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>ingredients: </span>
            {validIngredient.map((item, index) => {
              return (
                <span className='ing' key={item}>
                  {item}
                  {index < validIngredient.length - 1 ? "," : "."}
                </span>
              );
            })}
          </p>
          <p>
            <span className='drink-data'>instruction: </span>
            {instruction}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
