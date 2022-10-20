import { NavLink } from "react-router-dom";
import { MenuNavBar } from "../MenuNavBar/MenuNavBar";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faUser,
  faUserCheck,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

export const Header = ({ customerData }) => {
  let [menuWidth, setMenuWidth] = useState("0");
  let [search, setSearch] = useState("");
  let [update, setUpdate] = useState(false);

  const searchId = document.getElementById("SearchEnter");

  const openMenu = () => {
    setMenuWidth("100vw");
  };
  const closeMenu = () => {
    setMenuWidth("0");
  };

  document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchId.click();
      setUpdate(!update);
    }
  });

  return (
    <>
      <header>
        <MenuNavBar menuWidth={menuWidth} closeMenu={closeMenu} />
        <div className="header__top container">
          <div className="header__imgs">
            <NavLink to="/">
              <img
                className="header__img-logo img-logo"
                src="/img/logo/logo-img.png"
                alt="logo da Hack Fashion"
              />
            </NavLink>
            <NavLink to="/">
              <img
                className="header__img-name img-name header__img--display-none"
                src="/img/logo/logo-name.png"
                alt="Hack Fashion"
              />
            </NavLink>
          </div>
          <nav className="header__nav">
            <FontAwesomeIcon icon={faLocationDot} />
            {customerData[0].loged === true && (
              <NavLink to="/userConfigs">
                <FontAwesomeIcon icon={faUserCheck} />
              </NavLink>
            )}
            {customerData[0].loged !== true && (
              <NavLink to="/Login">
                <FontAwesomeIcon icon={faUser} />
              </NavLink>
            )}
            <NavLink to="/Carrinho">
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>

            <FontAwesomeIcon icon={faBars} onClick={openMenu} />
          </nav>
        </div>
        <div className="header__bottom container header__bottom--display-none">
          <div className="header__search ">
            <input
              id="header__input-text"
              type="text"
              name="search"
              placeholder="Pesquise"
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
            <NavLink to={`/${search}`}>
              <i id="SearchEnter" className="fa-solid fa-magnifying-glass"></i>
            </NavLink>
          </div>
          <nav className="header__categories">
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
          </nav>
        </div>
      </header>
      <div className="header-height"></div>
    </>
  );
};
