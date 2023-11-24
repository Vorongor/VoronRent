import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./App.module.css";
import IconCarFront from "./SVG/CarSvg";

function Header() {
  const location = useLocation().pathname;

  return (
    <header className={style.header}>
      <Link to={"/"} className={style.logo}>
        <span>CAR</span>
        <IconCarFront className={style.carIcon} />
        <span>RENTAL</span>
      </Link>
      <nav className={style.menu}>
        <Link
          className={location === "/" ? style.activeLink : style.link}
          to={"/"}
        >
          Home
        </Link>
        <Link
          className={location === "/catalog" ? style.activeLink : style.link}
          to={"/catalog"}
        >
          Catalog
        </Link>
        <Link
          className={location === "/favorite" ? style.activeLink : style.link}
          to={"/favorite"}
        >
          Favorite
        </Link>
      </nav>
    </header>
  );
}
export default Header;
