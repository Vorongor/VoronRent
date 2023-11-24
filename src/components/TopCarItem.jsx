import React from "react";

function TopCarItem({ car }) {
  function handleButton(car) {
    console.log(car);
  }

  return (
    <div>
      <img
        style={{ width: 360, height: 240 }}
        src={car.img}
        alt={car.description}
      />
      <div>
        <p>
          {car.make}, {car.model}
        </p>
        <p>{car.rentalPrice}</p>
      </div>
      <p>{car.address}</p>
      <p>{car.rentalCompany}</p>
      <p>{car.accessories}</p>
      <p>{car.functionalities}</p>
      <p>{car.id}</p>
      <button type="button" onClick={() => handleButton(car)}>
        Rent this Car
      </button>
    </div>
  );
}
export default TopCarItem;
