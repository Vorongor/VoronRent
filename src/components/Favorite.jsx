import React from 'react';
import { useSelector } from 'react-redux';
import CatalogItem from './CatalogItem';

function Favorite() {
  const favoriteCars = useSelector(state => state.car.favoriteCars);
  const carData = useSelector(state => state.car.carData);
  const favoriteCarsData = carData.filter(car => favoriteCars.includes(car.id));
  return (
    <div>
      <h2>Favorite</h2>
      <ul>
        {favoriteCarsData.map((car, index) => {
          return (
            <li key={index}>
              <CatalogItem car={car} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorite;
