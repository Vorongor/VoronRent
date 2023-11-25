import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CatalogItem from './CatalogItem';
import style from './App.module.css';
import PopUp from './PopUp';

function Favorite() {
  const [selectedCar, setSelectedCar] = useState(null);
  const favoriteCars = useSelector(state => state.car.favoriteCars);
  const carData = useSelector(state => state.car.carData);
  const favoriteCarsData = carData.filter(car => favoriteCars.includes(car.id));

  function handleClosePopUp() {
    setSelectedCar(null);
  }

  function handleChoose(car) {
    setSelectedCar(car);
  }
  return (
    <div>
      <h2>Favorite</h2>
      <ul className={style.catalogList}>
        {favoriteCarsData.map((car, index) => {
          return <CatalogItem key={index} car={car} chooseCar={handleChoose} />;
        })}
      </ul>
      {selectedCar && <PopUp car={selectedCar} closeFunc={handleClosePopUp} />}
    </div>
  );
}

export default Favorite;
