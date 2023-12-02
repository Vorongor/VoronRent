import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogItem from './CatalogItem';
import { fetchCarData, fetchSearchData } from '../redux/operation';
import style from './CssModules/Catalog.module.css';
import PopUp from './PopUp';

function Ctalog() {
  const dispatch = useDispatch();

  const carData = useSelector(state => state.car.carData);
  const searchData = useSelector(state => state.car.searchData);
  const maxSize = useSelector(state => state.car.maxSize);

  const [selectedOption, setSelectedOption] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [milageFrom, setMilageFrom] = useState('');
  const [milageTo, setMilageTo] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    dispatch(fetchCarData(page));
  }, [dispatch, page]);

  const cancelSearch = () => {
    setSearch(false);
  };

  const handleOptionChange = e => {
    setSelectedOption(e.target.value);
  };

  const prises = useSelector(state => state.car.prices);
  const makes = useSelector(state => state.car.makes);

  function filterAndSortPrices(prices) {
    const uniquePrices = Array.from(new Set(prices));

    const sortedPrices = uniquePrices.sort((a, b) => {
      const priceA = Number(a);
      const priceB = Number(b);

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
      })
      .catch(error => {
        console.error('Error loading more data:', error);
      });
  }

  function handleSearch(e) {
    e.preventDefault();
    const query = {};
    if (selectedOption) {
      query.make = selectedOption;
    }
    if (selectedPrice) {
      query.rentalPrice = selectedPrice;
    }
    if (milageFrom) {
      query.milageFrom = milageFrom;
    }
    if (milageTo) {
      query.milageTo = milageTo;
    }
    dispatch(fetchSearchData(query));
    if (search) {
      setSearch(false);
      setSelectedOption('');
      setSelectedPrice('');
      setMilageFrom('');
      setMilageTo('');
    } else {
      setSearch(true);
    }
  }

  return (
    <div>
      <form className={style.form} action="submit" onSubmit={handleSearch}>
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
            {makes.map((option, index) => (
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
                ${option}
              </option>
            ))}
          </select>
        </label>
        <label className={style.labelKm}>
          Car mileage / km
          <div className={style.imputBox}>
            <input
              className={style.kmSelect}
              type="text"
              placeholder="From "
              value={milageFrom}
              onChange={e => setMilageFrom(e.target.value)}
            />
            <input
              className={style.kmSelect}
              type="text"
              placeholder="To"
              value={milageTo}
              onChange={e => setMilageTo(e.target.value)}
            />
          </div>
        </label>
        <button className={style.search} type="submit">
          {search ? 'Cancel' : 'Search'}
        </button>
      </form>

      {carData.length > 0 && (
        <ul className={style.catalogList}>
          {!search
            ? carData.map((item, index) => (
                <CatalogItem key={index} car={item} chooseCar={handleChoose} />
              ))
            : searchData.map((item, index) => (
                <CatalogItem key={index} car={item} chooseCar={handleChoose} />
              ))}
        </ul>
      )}

      <button
        className={
          carData.length === maxSize ? style.loadMoreDisable : style.loadMore
        }
        type="button"
        onClick={handleLoadMore}
        disabled={carData.length === maxSize}
      >
        Load More
      </button>

      {selectedCar && <PopUp car={selectedCar} closeFunc={handleClosePopUp} />}
    </div>
  );
}

export default Ctalog;
