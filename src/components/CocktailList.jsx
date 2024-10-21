import React from "react";
import CocktailCard from "./CocktailCard";
import Wrapper from "../assets/wrappers/CocktailList";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h4>No drinks</h4>;
  }
  const formattedDrink = drinks.map((item) => {
    const { strDrink, strDrinkThumb, strAlcoholic, strGlass, idDrink } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <Wrapper>
      {formattedDrink.map((item) => {
        return <CocktailCard {...item} key={item.id} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
