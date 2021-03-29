import React from "react";


const Header = () => {
  let dayNumber = new Date().getDate();
  let month = new Date().toDateString().slice(4,7);
  return (
    <h1>Today is: {month}, {dayNumber}</h1>
  )
}
export default Header;