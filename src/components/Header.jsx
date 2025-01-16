import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";
import Menu from "./Menu.jsx";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [navAnimation, setNavAnimation] = useState("1")
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

  // navbar animation
  useEffect(() => {
    setTimeout(() => {
      setNavAnimation(navAnimation + 1)
    }, 300)
  }, [])


  return (
    <>
      <header>
        <div id="logo">
          <Link to="/" id="navlogo">
            <p>
              <span className="header-span">&lt;</span>emerson jr <span className="header-span">/&gt;</span>
            </p>
          </Link>
        </div>
        <nav>
          <ul>
            <NavLink to="/"  id="nav-1">
              <li>Home</li>
            </NavLink>
            <NavLink to="/about" id="nav-2" >
              <li>Sobre</li>
            </NavLink>
            <NavLink to="/skills" id="nav-3">
              <li>Habilidades</li>
            </NavLink>
            <NavLink to="projects" id="nav-4">
              <li>Projetos</li>
            </NavLink>
            <NavLink to="/contacts" id="nav-5">
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
