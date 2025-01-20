import "./Menu.css"
import { NavLink } from "react-router-dom"

const Menu = ({closeMenu}) => {
  return (
    <div id="menu">
      <nav>
          <ul>
            <NavLink onClick={closeMenu} to="/"  id="menu-nav-1">
              <li>Home</li>
            </NavLink>
            <NavLink onClick={closeMenu} to="/about" id="menu-nav-2" >
              <li>Sobre</li>
            </NavLink>
            <NavLink onClick={closeMenu} to="/skills" id="menu-nav-3">
              <li>Habilidades</li>
            </NavLink>
            <NavLink onClick={closeMenu} to="projects" id="menu-nav-4">
              <li>Projetos</li>
            </NavLink>
            <NavLink onClick={closeMenu} to="/contacts" id="menu-nav-5">
              <li>Contatos</li>
            </NavLink>
          </ul>
        </nav>
    </div>
  )
}

export default Menu
