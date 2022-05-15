import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <Wrapper>
      <h3>Popular</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Cart>
                <Link to={"/recipe/" + recipe.id}>
                  <p>{recipe.title}</p>;
                  <img src={recipe.image} alt={recipe.title} />
                </Link>
              </Cart>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 2rem 10%;
`;

const Cart = styled.div`
  
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  display: flex;
  
  img {
    background: rgba(76, 175, 80, 0.6);
    border-radius: 2rem;
    width: 100%;
    left:0;
    height:100%;
    object-fit: cover;
  }
  p{
      position: absolute;
      text-align: center;
      margin: auto;
      z-index: 10;
      top: 50%;
      left: 0%;
      transform: translate(100%;-50%);
      color: white;
      width: 100%
      margin: 0 -1rem;
      padding: 0 2rem;
      font-size: 1rem;
      width:100%
      
      
  }
`;
// const Gradient = styled.div`
//   z-index:3;
//   position: absolute;
//   width: 100%
//   height: 100%;
//   background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
// `;

export default Popular;
