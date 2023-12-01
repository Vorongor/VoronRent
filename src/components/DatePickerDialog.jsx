import React, { useRef, useState } from 'react';
import style from './App.module.css';
import 'react-day-picker/dist/style.css';
import { format, isValid, parse } from 'date-fns';
import FocusTrap from 'focus-trap-react';
import { DayPicker } from 'react-day-picker';
import { usePopper } from 'react-popper';
import { useDispatch } from 'react-redux';
import { setFinish, setStart } from 'redux/slice';

export default function DatePickerDialog({ title, finish = false }) {
  const dispatch = useDispatch();
  const today = new Date();
  const [selected, setSelected] = useState(today);
  const [inputValue, setInputValue] = useState(format(today, 'y-MM-dd'));
  const [timeValue, setTimeValue] = React.useState('00:00');
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const popperRef = useRef(null);
  const buttonRef = useRef(null);
  const [popperElement, setPopperElement] = useState(null);

  const popper = usePopper(popperRef.current, popperElement, {
    placement: 'bottom-start',
  });

  function convertDateToUnixTime(dateString) {
    const parsedDate = new Date(dateString);
    const unixTimestamp = parsedDate.getTime();
    const unixTimeInSeconds = Math.floor(unixTimestamp / 1000);
    return unixTimeInSeconds;
  }

  const closePopper = () => {
    setIsPopperOpen(false);
    buttonRef?.current?.focus();
  };

  const handleInputChange = e => {
    setInputValue(e.currentTarget.value);
    const date = parse(e.currentTarget.value, 'y-MM-dd', new Date());
    if (isValid(date)) {
      setSelected(date);
    } else {
      setSelected(undefined);
    }
  };

  const handleButtonClick = () => {
    setIsPopperOpen(true);
  };

  const handleDaySelect = date => {
    setSelected(date);
    if (date) {
      const selectedDateTime = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        parseInt(timeValue.split(':')[0], 10),
        parseInt(timeValue.split(':')[1], 10)
      );
      switch (finish) {
        case true:
          dispatch(setFinish(convertDateToUnixTime(selectedDateTime)));
          break;
        default:
          dispatch(setStart(convertDateToUnixTime(selectedDateTime)));
          break;
      }

      setInputValue(format(date, 'y-MM-dd'));
      closePopper();
    } else {
      setInputValue('');
    }
  };

  const handleTimeChange = e => {
    const time = e.target.value;
    setTimeValue(time);
  };

  const handleClickOutside = e => {
    // Check if the clicked element is outside the popper
    if (popperRef.current && !popperRef.current.contains(e.target)) {
      closePopper();
    }
  };

  return (
    <div>
      <div className={style.calendar} ref={popperRef}>
        <input
          className={style.priseSelect}
          style={{ border: '1px solid #3470ff' }}
          type="text"
          placeholder={format(new Date(), 'y-MM-dd')}
          value={`${inputValue}: ${timeValue}`}
          onChange={handleInputChange}
        />
        <button
          className={style.timePick}
          ref={buttonRef}
          type="button"
          aria-label="Pick a date"
          onClick={handleButtonClick}
        >
          {title}
        </button>
      </div>
      {isPopperOpen && (
        <FocusTrap
          active
          focusTrapOptions={{
            initialFocus: false,
            allowOutsideClick: true,
            clickOutsideDeactivates: true,
            fallbackFocus: buttonRef.current || undefined,
          }}
          onClickOutside={handleClickOutside}
        >
          <div
            tabIndex={-1}
            style={{
              ...popper.styles.popper,
              background: 'white',
              borderRadius: 12,
            }}
            className="dialog-sheet"
            {...popper.attributes.popper}
            ref={setPopperElement}
            role="dialog"
            aria-label="DayPicker calendar"
          >
            <DayPicker
              className={style.picker}
              initialFocus={isPopperOpen}
              mode="single"
              defaultMonth={selected}
              selected={selected}
              disabledDays={{ before: today }}
              onSelect={handleDaySelect}
              footer={
                <>
                  <p className={style.timer}>
                    Pick a time:{' '}
                    <input
                      className={style.timerInput}
                      type="time"
                      value={timeValue}
                      onChange={handleTimeChange}
                    />
                  </p>
                  <p className={style.timer}>
                    Selected date:{' '}
                    {selected ? selected.toLocaleString() : 'none'}
                  </p>
                </>
              }
            />
          </div>
        </FocusTrap>
      )}
    </div>
  );
}
