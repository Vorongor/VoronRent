import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarData } from '../redux/operation';
import TopCarItem from './TopCarItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from './App.module.css';
import homeStyle from './CssModules/Home.module.css';
import PopUp from './PopUp';

function Home() {
  const dispatch = useDispatch();
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    dispatch(fetchCarData());
  }, [dispatch]);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function handleClosePopUp(car) {
    setSelectedCar(null);
  }
  function handleChooseCar(car) {
    setSelectedCar(car);
  }

  const carData = useSelector(state => state.car.carData);
  const rentalCompany = useSelector(state => state.car.rentalCompany);
  const randomCar = getRandomNumber(2, 10);

  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  };

  const topData = [
    carData[randomCar],
    carData[randomCar + 1],
    carData[randomCar - 1],
    carData[randomCar + 2],
    carData[randomCar - 2],
  ];
  return (
    <div>
      <div className={homeStyle.introduce}>
        <h2 className={style.title}>Our services</h2>
        <p>Daily rental of premium cars</p>
        <p>daily rental of sports cars</p>
        <p>daily rental of SUVs</p>
        <p>daily business class car rental</p>
        <p>Booking and renting a car without registration</p>
        <p>10% discount on the first trip upon registration</p>
      </div>
      {carData.length > 0 ? (
        <div>
          <h2 className={style.title}>Top Car of Week</h2>
          {carData.length > 0 && (
            <ul className={homeStyle.listTopCar}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                loop={true}
                scrollbar={{ draggable: true }}
                breakpoints={breakpoints}
              >
                {topData.map((item, index) => {
                  return (
                    <SwiperSlide style={{ marginBottom: '30px' }} key={index}>
                      <TopCarItem car={item} chooseCar={handleChooseCar} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </ul>
          )}
        </div>
      ) : (
        <div>Loading</div>
      )}
      {rentalCompany && (
        <ul className={homeStyle.companyList}>
          <h2 className={style.title}>Ouer Partner Rental Company</h2>
          {rentalCompany.map(item => (
            <li key={item} className={homeStyle.rentCompany}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {selectedCar && <PopUp car={selectedCar} closeFunc={handleClosePopUp} />}
    </div>
  );
}

export default Home;
