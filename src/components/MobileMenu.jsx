import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { logOut } from 'redux/operation';
import style from './CssModules/Header.module.css';
import IconCarFront from './SVG/CarSvg';
import IconCloseCircle from './SVG/CloseSvg';
import IconLogin from './SVG/LogInSvg';

function MobileMenu({ closeMenu }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const isloggedIn = useSelector(state => state.car.isloggedIn);

  function handleLogOut() {
    dispatch(logOut());
    Notify.success('You successfuly loguot');
    navigate('/');
  }

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
      {!isloggedIn ? (
        <Link
          className={location === '/auth' ? style.activeLink : style.link}
          to={'/auth'}
        >
          <IconLogin className={style.login} />
        </Link>
      ) : (
        <button
          onClick={handleLogOut}
          className={location === '/auth' ? style.activeLink : style.link}
        >
          LogOut
        </button>
      )}
    </div>
  );
}
export default MobileMenu;
