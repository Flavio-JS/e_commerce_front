import { NavLink } from "react-router-dom";
import "./MenuNavBar.css";

export const MenuNavBar = ({ menuWidth, closeMenu }) => {
  setTimeout(() => {
    let divMenuNavBar = document.querySelector(".menu-nav-bar");
    divMenuNavBar.style.width = menuWidth;
  }, 1);

  return (
    <div onClick={closeMenu} className="menu-nav-bar">
      <i className="menu fa-solid fa-xmark" onClick={closeMenu}></i>
      <ul>
        <li>
          <NavLink to="/moletom">Moletom</NavLink>
        </li>
        <li>
          <NavLink to="/camiseta">Camiseta</NavLink>
        </li>
        <li>
          <NavLink to="/calça">Calça</NavLink>
        </li>
        <li>
          <NavLink to="/jeans">Jeans</NavLink>
        </li>
        <li>
          <NavLink to="/jaqueta">Jaqueta</NavLink>
        </li>
      </ul>
    </div>
  );
};
