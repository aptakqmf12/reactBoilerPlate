import React from "react";
import { Link } from "react-router-dom";
import { StyledNav, StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <Link to={"/"}>home</Link>
      </h1>
      <StyledNav>
        <ul>
          <li>
            <Link to={"/counter"}>counter</Link>
          </li>
          <li>
            <Link to={"/chart"}>chart</Link>
          </li>
          <li>
            <Link to={"/addComponent"}>addComponent</Link>
          </li>
          <li>
            <Link to={"/downloadImage"}>downloadImage</Link>
          </li>
          <li>
            <Link to={"/promise"}>promise</Link>
          </li>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
