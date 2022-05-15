import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FcSearch } from "react-icons/fc";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handelSubmit = (event) => {
    event.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <InputStyle onSubmit={handelSubmit}>
      <div>
        <FcSearch />
        <input
          type="text"
          value={input}
          placeholder="Search..."
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </InputStyle>
  );
}
const InputStyle = styled.form`
  display: flex;

  div {
    position: relative;
    width: 300px;
    margin: auto;
  }
  svg {
    position: absolute;
    left: 0%;
    top: 50%;
    transform: translate(100%, -50%);
    // margin-left: 17px;
    // margin-top: 17px;
    // z-index: 1;
    color: #4f5b66;
    font-size: 1.5rem;
    margin: 0 -1.2rem;
  }
  input {
    height: 50px;
    background: #ffff;
    border: none;
    font-size: 1.5rem;
    color: #262626;
    padding: 1rem 3rem;
    border-radius: 5px;
    width: 100%;
  }
`;

export default Search;
