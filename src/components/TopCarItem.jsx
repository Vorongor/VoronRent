import React from 'react';
import style from './App.module.css';

function TopCarItem({ car }) {
  function handleButton(car) {
    console.log(car);
  }

  return (
    <div className={style.topCard}>
      <div className={style.imgTopBox}>
        <img className={style.topImg} src={car.img} alt={car.description} />
        <p className={style.topPrice}>${car.rentalPrice}</p>
      </div>
      <div>
        <p>{car.address}</p>
        <p>{car.rentalCompany}</p>
        <p>{car.accessories}</p>
        <p>{car.functionalities}</p>
        <p>{car.id}</p>
        <button type="button" onClick={() => handleButton(car)}>
          Rent this Car
        </button>
      </div>
    </div>
  );
}
export default TopCarItem;
