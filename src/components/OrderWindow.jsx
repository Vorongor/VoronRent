import React, { useState } from 'react';
import style from './App.module.css';
import DatePickerDialog from './DatePickerDialog';
import { useDispatch, useSelector } from 'react-redux';
import IconArrowGoBackFill from './SVG/BackArrov';
import IconTelephoneInboundFill from './SVG/PhoneSvg';
import IconBxlTelegram from './SVG/TelegramSvg';
import IconMail from './SVG/MailSvg';
import IconChatDots from './SVG/ChatSvg';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addOrder } from 'redux/operation';

export default function OrderWindow({ car, closeFunc }) {
  const dispatch = useDispatch();
  const [client, setClient] = useState(null);
  const [wayToConect, setWayToConect] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const startTime = useSelector(state => state.car.startTime);
  const finishTime = useSelector(state => state.car.finishTime);
  const orderNumber = nanoid();
  const handleConfirm = () => {
    if (
      client &&
      wayToConect &&
      phoneNumber &&
      startTime &&
      startTime < finishTime
    ) {
      const order = {
        orderNumber: `${orderNumber}`,
        client: client,
        contact: `${wayToConect}: ${phoneNumber}`,
        startTime: startTime,
        finishTime: finishTime,
        carId: car._id,
      };
      dispatch(addOrder(order));
      console.log(
        '🚀 ~ file: OrderWindow.jsx:39 ~ handleConfirm ~ order:',
        order
      );
      closeFunc();
    } else {
      if (!client) {
        Notify.failure('Write your name');
      } else if (!phoneNumber) {
        Notify.failure('Chose the way to conect you and leav contact');
      } else if (!startTime) {
        Notify.failure('Chose the correct time to start the rent');
      } else if (!(startTime < finishTime)) {
        Notify.failure('Chose the correct time to finish the rent');
      }
    }
  };

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
  function calculatePrice() {
    const totalPrice =
      car.rentalPrice * calculateHourDifference(startTime, finishTime);
    return totalPrice;
  }

  return (
    <div className={style.calendarBox}>
      <input
        required
        className={style.calendarInput}
        onChange={e => setClient(e.target.value)}
        placeholder="Name"
        type="text"
      />
      <div
        style={{
          width: '100%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {!wayToConect ? (
          <div className={style.wayBtnBox}>
            <button
              className={style.wayButton}
              onClick={() => {
                setWayToConect('Phone');
              }}
            >
              <IconTelephoneInboundFill />
            </button>
            <button
              className={style.wayButton}
              onClick={() => {
                setWayToConect('Telegram');
              }}
            >
              <IconBxlTelegram />
            </button>
            <button
              className={style.wayButton}
              onClick={() => {
                setWayToConect('Email');
              }}
            >
              <IconMail />
            </button>
            <button
              className={style.wayButton}
              onClick={() => {
                setWayToConect('Other chat');
              }}
            >
              <IconChatDots />
            </button>
          </div>
        ) : (
          <input
            required
            className={style.calendarInput}
            placeholder="Way to contact"
            onChange={e => {
              setPhoneNumber(e.target.value);
            }}
            type="text"
          />
        )}
        {wayToConect && (
          <button
            className={style.backButton}
            onClick={() => {
              setWayToConect(null);
              setPhoneNumber(null);
            }}
          >
            <IconArrowGoBackFill />
          </button>
        )}
      </div>
      <div className={style.calendarTumb}>
        <DatePickerDialog title={'Choose a start time'} />
        <DatePickerDialog title={'Choose a finish time'} finish={true} />
      </div>
      <h2 className={style.orderTitle}>Order for rent</h2>
      <div style={{ width: '100%' }}>
        <table className={style.table}>
          <tbody className={style.infoTable}>
            <tr>
              <td>Name:</td>
              <td>{client}</td>
            </tr>
            <tr>
              <td>{wayToConect || 'Call me'}</td>
              <td>{phoneNumber}</td>
            </tr>
            <tr>
              <td>Car:</td>
              <td>
                {car.make}, {car.model}
              </td>
            </tr>
            <tr>
              <td>Order №:</td>
              <td>{orderNumber}</td>
            </tr>

            <tr>
              <td>Price:</td>
              <td>{car.rentalPrice} dollars per hour</td>
            </tr>
            <tr>
              <td>Start time:</td>
              <td>{convertUnixTimeToDate(startTime)}</td>
            </tr>
            <tr>
              <td>Finish time:</td>
              <td>{convertUnixTimeToDate(finishTime)}</td>
            </tr>
            <tr>
              <td>Total price:</td>
              <td>{calculatePrice()}$</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className={style.timePick} onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
}
