import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogItem from './CatalogItem';
import { fetchCarData } from '../redux/operation';
import style from './App.module.css';
import PopUp from './PopUp';

function Ctalog() {
  const dispatch = useDispatch();

  const fetchedData = useSelector(state => state.car.carData);
  console.log('🚀 ~ file: Catalog.jsx:12 ~ Ctalog ~ fetchedData:', fetchedData);
  const [carData, setCarData] = useState(fetchedData);

  const [selectedOption, setSelectedOption] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);
  const [page, setPage] = useState(1);

  const options = [
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Mercedes-Benz',
    'Chrysler',
    'Kia',
    'Land',
  ];

  useEffect(() => {
    dispatch(fetchCarData(page));
  }, [dispatch, page]);

  const handleOptionChange = e => {
    setSelectedOption(e.target.value);
  };

  const prises = carData.map(item => item.rentalPrice);

  function filterAndSortPrices(prices) {
    const uniquePrices = Array.from(new Set(prices));

    const sortedPrices = uniquePrices.sort((a, b) => {
      const priceA = Number(a.slice(1));
      const priceB = Number(b.slice(1));

      return priceA - priceB;
    });

    return sortedPrices;
  }
  function handleClosePopUp() {
    setSelectedCar(null);
  }

  function handleChoose(car) {
    setSelectedCar(car);
  }

  function handleLoadMore() {
    const nextPage = page + 1;

    dispatch(fetchCarData(nextPage))
      .then(data => {
        setPage(nextPage);
        setCarData(fetchedData);
      })
      .catch(error => {
        console.error('Error loading more data:', error);
      });
  }

  return (
    <div>
      <form className={style.form} action="submit">
        <label className={style.labelMark} htmlFor="dropdown">
          Car brand
          <select
            className={style.markSelect}
            id="dropdown"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="" disabled>
              Enter the text
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className={style.labelPrise} htmlFor="prise">
          Price/ 1 hour
          <select
            className={style.priseSelect}
            id="prise"
            value={selectedPrice}
            onChange={e => setSelectedPrice(e.target.value)}
          >
            <option value="" disabled>
              To $
            </option>
            {filterAndSortPrices(prises).map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className={style.labelKm}>
          Car mileage / km
          <div style={{ display: 'flex' }}>
            <input className={style.kmSelect} type="text" placeholder="From " />
            <input className={style.kmSelect} type="text" placeholder="To" />
          </div>
        </label>
        <button className={style.search} type="submit">
          Search
        </button>
      </form>

      {carData.length > 0 && (
        <ul className={style.catalogList}>
          {carData.map((item, index) => {
            return (
              <CatalogItem key={index} car={item} chooseCar={handleChoose} />
            );
          })}
        </ul>
      )}

      <button type="button" onClick={handleLoadMore} disabled={page > 4}>
        Load More
      </button>

      {selectedCar && <PopUp car={selectedCar} closeFunc={handleClosePopUp} />}
    </div>
  );
}

export default Ctalog;
