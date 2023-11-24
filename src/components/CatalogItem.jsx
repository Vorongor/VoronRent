import React from "react";
import style from "./App.module.css";

function CatalogItem({ car }) {
  function handleButton(car) {
    console.log(car);
  }

  const getAddress = (string) => {
    let address;
    address = string.split(",");
    address = address.slice(1);
    return address;
  };

  return (
    <div className={style.carCard}>
      <button className={style.heart}>heart</button>
      <img className={style.itemImg} src={car.img} alt={car.description} />
      <div className={style.topBox}>
        <p className={style.topText}>
          {car.make}, <span className={style.blue}>{car.model}</span>,{" "}
          {car.year}
        </p>
        <p>{car.rentalPrice}</p>
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
        onClick={() => handleButton(car)}
      >
        Learn more
      </button>
    </div>
  );
}
export default CatalogItem;
