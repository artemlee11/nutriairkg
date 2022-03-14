import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Header.css";
const COLORS = {
  primaryDark: "#404040",

};
const MenuLabel = styled.label`
  background-color: black;
  position: fixed;
  top: 2rem;
  right: 2rem;
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  cursor: pointer;
  z-index: 1000;
  text-align: center;
`;
const NavBackground = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background-color: ${COLORS.primaryDark};
  opacity:0.9;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;
const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "white")};
  width: 3rem;
  height: 3px;
  display: inline-block;
  margin-top: 2.8rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: white;
    width: 3rem;
    height: 3px;
    display: inline-block;

    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};

    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};

  transition: width 0.8s, opacity 0.8s;
`;
const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;
const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  color: white;
  padding: 1rem 2rem;

  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;

  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className='header-wrapper'>
        <div className='header-text'>
          <h1>с.Кыргызстан г.Бишкек</h1>
          <h1>Nutriair Kygryzstan</h1>
          <div className='header-descr'>
            <h1>+996(500)79-79-93</h1>
            <h1>Ежеденвно с 9:00 до 20:00</h1>
          </div>
        </div>
      </div>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>
      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink onClick={handleClick} to="/">
              Главная
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/createpost">
              Создать пост
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/catalog">
              Каталог
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/about">
              О нас
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/action">
              Акции
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/faq">
              Связаться с нами
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
}

export default Header;