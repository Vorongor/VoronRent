import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './CssModules/Header.module.css';
import IconCarFront from './SVG/CarSvg';
import MobileMenu from './MobileMenu';
import IconMenuRightAlt from './SVG/BurgerMenu';

function Header() {
  const location = useLocation().pathname;
  const [burger, setBurger] = useState(false);

  function closeMenu() {
    setBurger(false);
  }

  return (
    <header className={style.header}>
      <Link to={'/'} className={style.logo}>
        <span>CAR</span>
        <IconCarFront className={style.carIcon} />
        <span>RENTAL</span>
      </Link>
      <nav className={style.menu}>
        <Link
          className={location === '/' ? style.activeLink : style.link}
          to={'/'}
        >
          Home
        </Link>
        <Link
          className={location === '/catalog' ? style.activeLink : style.link}
          to={'/catalog'}
        >
          Catalog
        </Link>
        <Link
          className={location === '/favorite' ? style.activeLink : style.link}
          to={'/favorite'}
        >
          Favorite
        </Link>
      </nav>
      <button onClick={() => setBurger(true)} className={style.burger}>
        <IconMenuRightAlt />
      </button>
      {burger && <MobileMenu closeMenu={closeMenu} locstion={location} />}
    </header>
  );
}
export default Header;
