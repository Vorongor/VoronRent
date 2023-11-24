import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CatalogItem from "./CatalogItem";
import { fetchCarData } from "../redux/operation";
import style from "./App.module.css";

function Ctalog() {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    "Buick",
    "Volvo",
    "HUMMER",
    "Subaru",
    "Mitsubishi",
    "Nissan",
    "Lincoln",
    "GMC",
    "Hyundai",
    "MINI",
    "Bentley",
    "Mercedes-Benz",
    "Aston Martin",
    "Pontiac",
    "Lamborghini",
    "Audi",
    "BMW",
    "Chevrolet",
    "Mercedes-Benz",
    "Chrysler",
    "Kia",
    "Land",
  ];

  useEffect(() => {
    dispatch(fetchCarData());
  }, []);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const carData = useSelector((state) => state.car.carData);

  const prises = carData.map((item) => item.rentalPrice);

  function filterAndSortPrices(prices) {
    const uniquePrices = Array.from(new Set(prices));

    const sortedPrices = uniquePrices.sort((a, b) => {
      const priceA = Number(a.slice(1));
      const priceB = Number(b.slice(1));

      return priceA - priceB;
    });

    return sortedPrices;
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
            value={selectedOption}
            onChange={handleOptionChange}
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
          <div style={{ display: "flex" }}>
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
            return <CatalogItem key={index} car={item} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default Ctalog;
