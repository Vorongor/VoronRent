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
  const isLoggedIn = useSelector(state => state.car.isloggedIn);
  const client = useSelector(state => state.car.user);
  function handleClosePopUp() {
    setSelectedCar(null);
  }

  function handleChoose(car) {
    setSelectedCar(car);
  }
  return (
    <div className={style.favoriteDrop}>
      <h2 className={style.title}>Favorite</h2>
      <ul className={style.catalogList}>
        {favoriteCarsData.map((car, index) => {
          return <CatalogItem key={index} car={car} chooseCar={handleChoose} />;
        })}
      </ul>
      {isLoggedIn && (
        <div>
          <h3 className={style.title}>Well Come {client.name}</h3>
          <ul className={style.catalogList}>
            {favoriteCarsData.map((car, index) => {
              return (
                <CatalogItem key={index} car={car} chooseCar={handleChoose} />
              );
            })}
          </ul>
        </div>
      )}
      {selectedCar && <PopUp car={selectedCar} closeFunc={handleClosePopUp} />}
    </div>
  );
}

export default Favorite;
