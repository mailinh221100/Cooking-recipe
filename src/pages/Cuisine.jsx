import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// import { motion } from "framer-motion";
// su dung dia chi ben category de lay data

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();

    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params]);
  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Cart key={item.id}>
            <Link to={"/recipe/" + item.id} style={{ textDecoration: "none" }}>
              <img src={item.image} />
              <h4>{item.title}</h4>
            </Link>
          </Cart>
        );
      })}
    </Grid>
  );
}
const Grid = styled.div`
  margin: 0 10%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Cart = styled.div`
  img {
    border-radius: 2rem;
    width: 100%;
  }
  h4 {
    text-align: center;
    padding: 1rem;
    color: #313131;
  }
`;

export default Cuisine;
