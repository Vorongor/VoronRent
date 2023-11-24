// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import CatalogItem from "./CatalogItem";
// import { fetchCarData } from "../redux/operation";
// import style from "./App.module.css";

// function Ctalog() {
//   const dispatch = useDispatch();
//   const [selectedOption, setSelectedOption] = useState("");

//   const options = [
//     "Buick",
//     "Volvo",
//     "HUMMER",
//     "Subaru",
//     "Mitsubishi",
//     "Nissan",
//     "Lincoln",
//     "GMC",
//     "Hyundai",
//     "MINI",
//     "Bentley",
//     "Mercedes-Benz",
//     "Aston Martin",
//     "Pontiac",
//     "Lamborghini",
//     "Audi",
//     "BMW",
//     "Chevrolet",
//     "Mercedes-Benz",
//     "Chrysler",
//     "Kia",
//     "Land",
//   ];

//   useEffect(() => {
//     dispatch(fetchCarData());
//   }, []);

//   const handleOptionChange = (e) => {
//     setSelectedOption(e.target.value);
//   };
//   const carData = useSelector((state) => state.car.carData);
//   return (
//     <div>
//       <h2>All cars catalog</h2>
//       <div>
//         <form action="submit">
//           <label>
//             Car brand
//             <input type="text" />
//           </label>
//           <label htmlFor="dropdown">
//             Select an option:
//             <select
//               id="dropdown"
//               value={selectedOption}
//               onChange={handleOptionChange}
//             >
//               <option value="" disabled>
//                 Select an option
//               </option>
//               {options.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <label htmlFor="">
//             <input type="text" />
//           </label>
//         </form>
//       </div>
//       {carData.length > 0 && (
//         <ul className={style.catalogList}>
//           {" "}
//           {carData.map((item, index) => {
//             return <CatalogItem key={index} car={item} />;
//           })}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Ctalog;
