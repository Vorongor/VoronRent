import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarData } from '../redux/operation';
import TopCarItem from './TopCarItem';
import style from './App.module.css';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarData());
  }, [dispatch]);

  const carData = useSelector(state => state.car.carData);

  const topData = [carData[0], carData[1], carData[2]];
  return (
    <div>
      {carData.length > 0 ? (
        <div>
          <h2 className={style.title}>Top Car of Week</h2>
          {carData.length > 0 && (
            <ul>
              {topData.map((item, index) => {
                return <TopCarItem key={index} car={item} />;
              })}
            </ul>
          )}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default Home;
