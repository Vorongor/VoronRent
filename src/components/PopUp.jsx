import React from 'react';
import style from './App.module.css';
// import { useDispatch } from 'react-redux';

function PopUp({ car, closeFunc }) {
  const getAddress = string => {
    // const dispatch = useDispatch();
    let address;
    address = string.split(',');
    address = address.slice(1);
    return address;
  };

  function handleButtonRent(car) {
    console.log(car.id);
  }
  function parseRentalConditions(inputString) {
    const regex = /Minimum age: (\d+)\s+Valid driver's license\s+(.*)/;

    const matches = inputString.match(regex);

    if (!matches) {
      return null;
    }

    const minimumAge = parseInt(matches[1], 10);
    const additionalConditions = matches[2].trim();

    return {
      minimumAge,
      additionalConditions,
    };
  }
  const { minimumAge, additionalConditions } = parseRentalConditions(
    car.rentalConditions
  );

  return (
    <div className={style.backDrop}>
      <div className={style.modalWindow}>
        <button onClick={closeFunc} type="button" className={style.close}>
          X
        </button>
        <img className={style.popImg} src={car.img} alt={car.description} />
        <div className={style.topBox}>
          <p className={style.topText}>
            {car.make}, <span className={style.blue}>{car.model}</span>,
            {car.year}
          </p>
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
        <p className={style.popList}>{car.description}</p>
        <ul className={style.popList}>
          <span style={{ width: '100%' }}>
            Accessories and functionalities:
          </span>
          {car.accessories.map((item, index) => {
            return (
              <li key={index} className={style.accesFuncLi}>
                {item}
              </li>
            );
          })}
          {car.functionalities.map((item, index) => {
            return (
              <li key={index} className={style.accesFuncLi}>
                {item}
              </li>
            );
          })}
        </ul>
        <ul className={style.popList}>
          <span style={{ width: '100%' }}>Rental Conditions:</span>
          <li className={style.popLi}>
            Minimum age :{' '}
            <span style={{ color: '#3470ff', fontWeight: 'bold' }}>
              {minimumAge}
            </span>
          </li>
          <li className={style.popLi}>Valid driver’s license</li>
          <li className={style.popLi}>{additionalConditions}</li>
          <li className={style.popLi}>
            Mileage:
            <span style={{ color: '#3470ff', fontWeight: 'bold' }}>
              {car.mileage}
            </span>
          </li>
          <li className={style.popLi}>
            Prise:
            <span style={{ color: '#3470ff', fontWeight: 'bold' }}>
              {car.rentalPrice}
            </span>
          </li>
        </ul>
        <button
          className={style.rentBtn}
          type="button"
          onClick={() => handleButtonRent(car)}
        >
          Rental car
        </button>
      </div>
    </div>
  );
}
export default PopUp;
