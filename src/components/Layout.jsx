import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import style from './App.module.css';
function Layout() {
  return (
    <div className={style.backGround}>
      <Header />
      <Outlet />
    </div>
  );
}
export default Layout;
