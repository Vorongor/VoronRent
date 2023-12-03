import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogItem from './CatalogItem';
import style from './App.module.css';
import PopUp from './PopUp';
import { deleteOrder, fetchOrders } from 'redux/operation';
import IconDelete from './SVG/DeleteSvg';

function Favorite() {
  const dispatch = useDispatch();
  const [selectedCar, setSelectedCar] = useState(null);
  const favoriteCars = useSelector(state => state.car.favoriteCars);
  const carData = useSelector(state => state.car.carData);
  const favoriteCarsData = carData.filter(car => favoriteCars.includes(car.id));
  const isLoggedIn = useSelector(state => state.car.isloggedIn);
  const client = useSelector(state => state.car.user);
  const orders = useSelector(state => state.car.orders);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchOrders());
    }
  }, [dispatch, isLoggedIn]);

  function convertUnixTimeToDate(unixTimestamp) {
    const timestampInMilliseconds = unixTimestamp * 1000;
    const dateObject = new Date(timestampInMilliseconds);
    const formattedDate = dateObject.toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    return formattedDate;
  }
  function calculateHourDifference(startUnixTimestamp, endUnixTimestamp) {
    const startTimeInMilliseconds = startUnixTimestamp * 1000;
    const endTimeInMilliseconds = endUnixTimestamp * 1000;
    const timeDifferenceInMilliseconds =
      endTimeInMilliseconds - startTimeInMilliseconds;
    const timeDifferenceInHours =
      timeDifferenceInMilliseconds / (1000 * 60 * 60);

    const roundedHours = Math.round(timeDifferenceInHours);
    return roundedHours;
  }
  function calculatePrice(rentalPrice, startTime, finishTime) {
    const totalPrice =
      rentalPrice * calculateHourDifference(startTime, finishTime) * 0.9;
    return totalPrice;
  }

  function handleClosePopUp() {
    setSelectedCar(null);
  }

  function handleChoose(car) {
    setSelectedCar(car);
  }

  function handleDelete(id) {
    dispatch(deleteOrder(id));
  }
  return (
    <div className={style.favoriteDrop}>
      {favoriteCarsData.length > 0 ? (
        <ul className={style.catalogList}>
          <h2 className={style.title}>Favorite</h2>
          {favoriteCarsData.map((car, index) => {
            return (
              <CatalogItem key={index} car={car} chooseCar={handleChoose} />
            );
          })}
        </ul>
      ) : (
        <div className={style.emptyBox}>
          <p className={style.title}>It seems to be empty here</p>
        </div>
      )}
      {isLoggedIn && orders && orders.length > 0 && (
        <div>
          <h3 className={style.title}>Your orders: {client.name}</h3>
          <ul className={style.catalogList}>
            {orders.map((order, index) => {
              return (
                <li
                  key={index}
                  className={style.order}
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  <p className={style.topText}>Reserved rent</p>
                  <button
                    onClick={() => handleDelete(order._id)}
                    type="button"
                    className={style.ordDelete}
                  >
                    <IconDelete className={style.iconDelete} />
                  </button>
                  <table className={style.table}>
                    <tbody className={style.infoTable}>
                      <tr>
                        <td>Name:</td>
                        <td>{order.client}</td>
                      </tr>
                      <tr>
                        <td>How to conect</td>
                        <td>{order.contact}</td>
                      </tr>
                      <tr>
                        <td>Car:</td>
                        <td>
                          {order.make}, {order.model}
                        </td>
                      </tr>
                      <tr>
                        <td>Order №:</td>
                        <td>{order.orderNumber}</td>
                      </tr>
                      <tr>
                        <td>Price:</td>
                        <td>{order.rentalPrice} dollars per hour</td>
                      </tr>
                      <tr>
                        <td>Start time:</td>
                        <td>{convertUnixTimeToDate(order.startTime)}</td>
                      </tr>
                      <tr>
                        <td>Finish time:</td>
                        <td>{convertUnixTimeToDate(order.finishTime)}</td>
                      </tr>
                      <tr>
                        <td>Total price:</td>
                        <td>
                          {calculatePrice(
                            order.rentalPrice,
                            order.startTime,
                            order.finishTime
                          )}
                          $ -10%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </li>
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
