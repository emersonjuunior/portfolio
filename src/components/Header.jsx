import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";
import Menu from "./Menu.jsx";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  const body = document.querySelector("body");
  const menuBurger = document.querySelector("menu");
  if (menuBurger) {
    body.addEventListener("click", (e) => {
      if (menuBurger.contains(e.target)) {
        return;
      } else {
        setMenu(false);
      }
    });
  }

  return (
    <>
      <header>
        <div id="logo">
          <Link to="/">
            <p>
              <span>&lt;</span>emerson jr <span>/&gt;</span>
            </p>
          </Link>
        </div>
        <nav>
          <ul>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/about">
              <li>Sobre</li>
            </NavLink>
            <NavLink to="/skills">
              <li>Habilidades</li>
            </NavLink>
            <NavLink to="projects">
              <li>Projetos</li>
            </NavLink>
            <NavLink to="/contacts">
              <li>Contatos</li>
            </NavLink>
          </ul>
        </nav>

        <menu>
          <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
        </menu>
      </header>
      {menu && <Menu />}
    </>
  );
};

export default Header;
