import React from 'react';
import style from './App.module.css';

function TopCarItem({ car, chooseCar }) {
  return (
    <div className={style.topCard}>
      <div className={style.imgTopBox}>
        <p className={style.topName}>
          {car.make}, {car.model}
        </p>
        <img className={style.topImg} src={car.img} alt={car.description} />
        <p className={style.topPrice}>${car.rentalPrice}</p>
      </div>
      <div>
        <button
          className={style.rentBtn}
          type="button"
          onClick={() => chooseCar(car)}
        >
          Rent this Car
        </button>
      </div>
    </div>
  );
}
export default TopCarItem;
