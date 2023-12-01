import React from 'react';
import style from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite, setFavorite } from 'redux/slice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import IconHeart from './SVG/EmptyHert';
import IconHeartFull from './SVG/FullHeart';

function CatalogItem({ car, chooseCar }) {
  const dispatch = useDispatch();

  const getAddress = string => {
    let address;
    address = string.split(',');
    address = address.slice(1);
    return address;
  };

  function handleLike(id) {
    dispatch(setFavorite(id));
  }
  function handleDislike(id) {
    dispatch(removeFavorite(id));
  }

  const favoriteCars = useSelector(state => state.car.favoriteCars);

  return (
    <div className={style.carCard}>
      {favoriteCars.includes(car.id) ? (
        <button
          className={style.heart}
          type="button"
          onClick={() => {
            handleDislike(car.id);
            Notify.warning(`${car.make}, ${car.model} remove from favorite`);
          }}
        >
          <IconHeartFull />
        </button>
      ) : (
        <button
          className={style.heart}
          type="button"
          onClick={() => {
            handleLike(car.id);
            Notify.success(`${car.make}, ${car.model} added to favorite`);
          }}
        >
          <IconHeart />
        </button>
      )}
      <img className={style.itemImg} src={car.img} alt={car.description} />
      <div className={style.topBox}>
        <p className={style.topText}>
          {car.make}, <span className={style.blue}>{car.model}</span>,{car.year}
        </p>
        <p>${car.rentalPrice}</p>
      </div>
      <div className={style.botBox}>
        <p className={style.botTip}>{getAddress(car.address)[0]}</p>
        <p className={style.botTip}>{getAddress(car.address)[1]}</p>
        <p className={style.botTip}>{car.rentalCompany}</p>
        <p className={style.botTip}>{car.accessories[0]}</p>
        <p className={style.botTip}>{car.model}</p>
        <p className={style.botTip}>{car.id}</p>
        <p className={style.botTip}>{car.functionalities[0]}</p>
      </div>
      <button
        className={style.rentBtn}
        type="button"
        onClick={() => chooseCar(car)}
      >
        Learn more
      </button>
    </div>
  );
}
export default CatalogItem;
