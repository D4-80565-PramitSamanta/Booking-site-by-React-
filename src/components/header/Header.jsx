import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import React from "react";
import { useState } from "react";
import { format } from "date-fns";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import {
  faBed,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

import { DateRange } from "react-date-range";



const Header = ({ type }) => {

  const [openState, setOpenState] = useState(false);

  const [openOption, setOpenOption] = useState(false);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  })

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);


  const handleClick = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };



  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listmode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        {type !== "list" && <><h1 className="headerTitle"> A lifetime of discounts ? its genius </h1>
          <p className="headerDesc">
            {" "}
            get rewarded for your travels. unlock instant saving of 10% or more
            with a free goibibo booking account
          </p>
          <button className="headerBtn">Sign In/Register</button>

          <div className="headerSeacrh">
            <div className="headerSearchItem">
              <FontAwesomeIcon
                icon={faBed}
                className="headerSearchIcon"
              ></FontAwesomeIcon>
              <input
                type="text"
                placeholder="Where are you going"
                className="headerSearchInput"
              />
            </div>

            <div className="headerSearchItem">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="headerSearchIcon"
              ></FontAwesomeIcon>
              <span
                onClick={() => setOpenState(!openState)}
                className="headerSearchText"
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")}
                                     to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}{" "}
              </span>
              {openState && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </div>

            <div className="headerSearchItem">
              <FontAwesomeIcon
                icon={faPerson}
                className="headerSearchIcon"
              ></FontAwesomeIcon>
              <span onClick={() => setOpenOption(!openOption)} className="headerSearchText">
                {`${options.adult} Adults . 
            ${options.children} Children . 
            ${options.room} Rooms`}{" "}
              </span>

              {openOption && <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adults</span>
                  <div className="optionCounter">

                    <button disabled={options.adult <= 1} className="optionCounterBtn" onClick={() => handleClick("adult", "d")}>-</button>
                    <span className="optionText">{options.adult}</span>
                    <button className="optionCounterBtn" onClick={() => handleClick("adult", "i")}>+</button>                </div>
                </div>

                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button disabled={options.children <= 0} className="optionCounterBtn" onClick={() => handleClick("children", "d")}>-</button>
                    <span className="optionText">{options.children}</span>
                    <button className="optionCounterBtn" onClick={() => handleClick("children", "i")}>+</button>

                  </div>
                </div>

                <div className="optionItem">
                  <span className="optionText">Rooms</span>
                  <div className="optionCounter">
                    <button disabled={options.room <= 1} className="optionCounterBtn" onClick={() => handleClick("room", "d")}>-</button>
                    <span className="optionText">{options.room}</span>
                    <button className="optionCounterBtn" onClick={() => handleClick("room", "i")}>+</button>

                  </div>
                </div>
              </div>}
            </div>

            <div className="headerSearchItem">
              <button className="headerBtn">Seacrh</button>
            </div>
          </div>
        </>}
      </div>
    </div>
  );
};

export default Header;
