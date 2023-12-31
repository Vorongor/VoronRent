import React, { useEffect, useState } from 'react';
import style from './CssModules/PopUp.module.css';
import IconCloseCircle from './SVG/CloseSvg';
import OrderWindow from './OrderWindow';
import { useSelector } from 'react-redux';

function PopUp({ car, closeFunc }) {
  const [order, setOrder] = useState(false);
  const isLoggedIn = useSelector(state => state.car.isloggedIn);

  useEffect(() => {
    const handleEscKey = event => {
      if (event.key === 'Escape') {
        closeFunc();
      }
    };

    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [closeFunc]);

  const getAddress = string => {
    let address;
    address = string.split(',');
    address = address.slice(1);
    return address;
  };

  function formatMileage(mileage) {
    return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function handleButtonRent() {
    setOrder(true);
  }
  function handleButtonCall() {
    console.log('Calling the car rental company...');
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
  function backDropClose(e) {
    if (e.target === e.currentTarget) {
      closeFunc();
    }
  }

  return (
    <div className={style.backDrop} onClick={backDropClose}>
      {!order ? (
        <div className={style.modalWindow}>
          <button onClick={closeFunc} type="button" className={style.close}>
            <IconCloseCircle />
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
                {formatMileage(car.mileage)}
              </span>
            </li>
            <li className={style.popLi}>
              Prise:
              <span style={{ color: '#3470ff', fontWeight: 'bold' }}>
                {car.rentalPrice}
              </span>
            </li>
          </ul>
          <div className={style.btnBox}>
            <a
              className={style.rentBtn}
              href="tel:+380730000000"
              onClick={handleButtonCall}
            >
              Rental car
            </a>
            {isLoggedIn && (
              <button
                className={style.reservbtn}
                type="button"
                onClick={() => handleButtonRent(car)}
              >
                Reserve car
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className={style.modalWindow}>
          <button onClick={closeFunc} type="button" className={style.close}>
            <IconCloseCircle />
          </button>
          <OrderWindow car={car} closeFunc={closeFunc} />
        </div>
      )}
    </div>
  );
}
export default PopUp;
