import { FaBook, FaPlus, FaSortAmountUpAlt, FaUserAlt } from "react-icons/fa";
import { IoIosRestaurant } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";

import Search from "./Search";

function Navbar() {
  let navigation = useNavigate();

  const HandleLogin = () => {
    const path = "/login";
    navigation(path);
  };

  const HandleHome = () => {
    const path = "/";
    navigation(path);
  };
  const HandleRanking = () => {
    const path = "/";
    navigation(path);
  };

  const HandleCreate = () => {
    const path = "/";
    navigation(path);
  };
  const HandleDish = () => {
    const path = "/";
    navigation(path);
  };
  return (
    <UserNavDiv>
      <LogoContent onClick={HandleHome}>
        <IoIosRestaurant
          style={{ margin: "10px 0", color: "white", fontsize: "44px" }}
        ></IoIosRestaurant>
        <p style={{ color: "white", fontWeight: "bold" }}>delicious</p>
      </LogoContent>
      <NavbarItems>
        <Search />

        <Item>
          <FaSortAmountUpAlt onClick={HandleRanking} />
          <H3Css>Ranking</H3Css>
        </Item>
        <Item onClick={HandleCreate}>
          <FaPlus />
          <H3Css>Create</H3Css>
        </Item>
        <Item onClick={HandleDish}>
          <FaBook />
          <H3Css>Your Dish</H3Css>
        </Item>

        <Item>
          <FaUserAlt onClick={HandleLogin} />
        </Item>
      </NavbarItems>
    </UserNavDiv>
  );
}

export default Navbar;

const UserNavDiv = styled.div`
  height: 100px;
  width: 100%;
  font-size: 20px;
  display: flex;
  box-shadow: 2px 2px 6px grey;
  /* position: fixed; */
  background-image: linear-gradient(to right, #c64e60, #d48396, #ffccd8);
  color: #051937;
`;
const H3Css = styled.h3`
  margin-left: 10px;
`;
const NavbarItems = styled.ul`
  flex: 5;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
`;
const LogoContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  transition-duration: 0.5s;
`;
