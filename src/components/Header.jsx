import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";
import Menu from "./Menu.jsx";
import BurgerMenu from "./BurgerMenu.jsx";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(prev => !prev);
  };

  const closeMenu = () => {
    setMenu(false)
  }

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
        <nav id="nav-desktop">
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
          <BurgerMenu toggleMenu={toggleMenu} menu={menu}/>
        </menu>
      </header>
       {menu && <Menu closeMenu={closeMenu}/>}
    </>
  );
};

export default Header;
