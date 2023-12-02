import React, { useState } from 'react';
import style from './CssModules/Auth.module.css';

function AuthPage() {
  const [mode, setMode] = useState('Registration');

  function toggleMode(e) {
    e.preventDefault();
    switch (mode) {
      case 'Registration':
        setMode('Login');
        break;

      default:
        setMode('Registration');
        break;
    }
  }
  return (
    <div className={style.window}>
      <form action="submit">
        {mode === 'Login' && <input name="name" type="text" />}
        <input name="email" type="text" />
        <input name="password" type="text" />

        <button></button>
        <button onClick={toggleMode}>go to {mode}</button>
      </form>
    </div>
  );
}
export default AuthPage;
