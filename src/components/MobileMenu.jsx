import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './CssModules/Header.module.css';
import IconCarFront from './SVG/CarSvg';
import IconCloseCircle from './SVG/CloseSvg';

function MobileMenu({ closeMenu }) {
  const location = useLocation().pathname;
  return (
    <div className={style.mobileMenu}>
      <button className={style.mobileClose} onClick={() => closeMenu()}>
        <IconCloseCircle />
      </button>
      <Link
        to={'/'}
        onClick={() => {
          closeMenu();
        }}
        className={style.logo}
      >
        <span>CAR</span>
        <IconCarFront className={style.carIcon} />
        <span>RENTAL</span>
      </Link>
      <Link
        onClick={() => {
          closeMenu();
        }}
        className={location === '/' ? style.activemobileLink : style.mobileLink}
        to={'/'}
      >
        Home
      </Link>
      <Link
        onClick={() => {
          closeMenu();
        }}
        className={
          location === '/catalog' ? style.activemobileLink : style.mobileLink
        }
        to={'/catalog'}
      >
        Catalog
      </Link>
      <Link
        onClick={() => {
          closeMenu();
        }}
        className={
          location === '/favorite' ? style.activemobileLink : style.mobileLink
        }
        to={'/favorite'}
      >
        Favorite
      </Link>
      <Link
        onClick={() => {
          closeMenu();
        }}
        className={
          location === '/auth' ? style.activemobileLink : style.mobileLink
        }
        to={'/'}
      >
        123
      </Link>
    </div>
  );
}
export default MobileMenu;
