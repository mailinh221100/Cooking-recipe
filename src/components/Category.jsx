import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import React from "react";
//tao chon lua va style no
// link no su dung navbar to toi dia chi

function Category() {
  return (
    <Link>
      <Slink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={"/cuisine/Thai"}>
        <FaHamburger />
        <h4>Thai</h4>
      </Slink>
      <Slink to={"/cuisine/Japanese"}>
        <GiNoodles />
        <h4>Janpan</h4>
      </Slink>
      <Slink to={"/cuisine/American"}>
        <GiChopsticks />
        <h4>American</h4>
      </Slink>
    </Link>
  );
}

const Link = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
`;
const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(#494949, #313131);
  width: 6rem;
  padding: 1.78rem;
  cursor: pointer;
  transform: scale(0.8);
  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(#e66465, #9198e5);
    h4 {
      color: white;
    }
    svg {
      color: white;
    }
  }
`;

export default Category;
