import React, { useState } from 'react';
import style from './CssModules/Auth.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch } from 'react-redux';
import { logIn, register } from 'redux/operation';
import { useNavigate } from 'react-router-dom';

function AuthPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mode, setMode] = useState('Registration');
  const [user, setUser] = useState({});

  function createUser(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    switch (mode) {
      case 'Registration':
        switch (user) {
          case !user.email:
            Notify.failure('You mised email fild');
            break;
          case !user.password:
            Notify.failure('You mised password fild');
            break;
          default:
            dispatch(logIn(user));
            Notify.success('You successfuly login');
            setUser({});
            navigate('/favorite');
            break;
        }
        break;
      default:
        switch (user) {
          case !user.name:
            Notify.failure('You mised name fild');
            break;
          case !user.email:
            Notify.failure('You mised email fild');
            break;
          case !user.password:
            Notify.failure('You mised password fild');
            break;
          default:
            dispatch(register(user));
            Notify.success('You successfuly register');
            setUser({});
            navigate('/favorite');
            break;
        }
        break;
    }
  }

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
      <form className={style.imputBox} action="submit" onSubmit={handleSubmit}>
        <h5 className={style.title}>
          {mode !== 'Login' ? 'Sign In' : 'Sign Up'}
        </h5>
        {mode === 'Login' && (
          <label className={style.label}>
            <input
              required
              value={user.name || ''}
              onChange={createUser}
              className={style.input}
              name="name"
              type="text"
              placeholder="name"
            />
          </label>
        )}
        <label className={style.label}>
          <input
            required
            value={user.email || ''}
            onChange={createUser}
            className={style.input}
            name="email"
            type="text"
            placeholder="email"
          />
        </label>
        <label className={style.label}>
          <input
            required
            value={user.password || ''}
            onChange={createUser}
            className={style.input}
            name="password"
            type="text"
            placeholder="password"
          />
        </label>

        <button className={style.authBtn}>
          {mode !== 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
        <button className={style.chngBtn} onClick={toggleMode}>
          go to {mode}
        </button>
      </form>
    </div>
  );
}
export default AuthPage;
