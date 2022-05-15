import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  const [detail, setDetail] = useState({});
  const [activeTab, setActiveTab] = useState("Instructions");
  let params = useParams();

  const getDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const recipes = await data.json();

    setDetail(recipes);
  };
  useEffect(() => {
    getDetails();
  }, [params.name]);
  return (
    <DetailWrapper>
      <div>
        <h2>{detail.title}</h2>
        <img src={detail.image} />
      </div>
      <div>
        <Info>
          <Button
            className={activeTab === "Instructions" ? "active" : ""}
            onClick={() => setActiveTab("Instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "Ingredients" ? "active" : ""}
            onClick={() => setActiveTab("Ingredients")}
          >
            Ingredients
          </Button>
        </Info>
        {activeTab === "Instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: detail.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: detail.instructions }}></h3>
          </div>
        )}
        {activeTab === "Ingredients" && (
          <ul>
            {detail.extendedIngredients.map((item) => {
              return <li key={item.id}>{item.original}</li>;
            })}
          </ul>
        )}
      </div>
    </DetailWrapper>
  );
}
const Button = styled.button`
  padding : 1rem 2rem;
  margin-right: 2rem;
  
  boder: 2px solid black
  margin-left: 2rem;
  font-weight: 600;

  background-color: #fbc2c2;
  border-radius: 100px;
  box-shadow: rgb(187 107 44 / 20%) 0 -25px 18px -14px inset, rgb(187 86 44 / 15%) 0 1px 2px, rgb(187 73 44 / 15%) 0 2px 4px, rgb(187 60 44 / 15%) 0 4px 8px, rgb(187 44 44 / 15%) 0 8px 16px, rgb(187 44 44 / 18%) 0 16px 32px;
  color: #8e0000;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  font-weight: 900;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover {
    
    transform: scale(1.05) rotate(-1deg);
  }
`;
const DetailWrapper = styled.div`
  margin: 5rem 10%;

  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin: 2rem;
  }
  h3 {
    margin-left: 10rem;
    font-size: 1.2rem;
  }
  ul li {
    font-size: 1.2rem;
    line-height: 2.5rem;
    margin-left: 10rem;
  }
  li {
    list-style-type: circle;
  }
  ul {
    margin-top: 2rem;
  }
`;
const Info = styled.div`
  margin-left: 10rem;
`;
export default Recipe;
