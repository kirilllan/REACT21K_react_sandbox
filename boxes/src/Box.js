import React from "react";
const Box = (props) => {
  const handleClick = () => {
    console.log('clicked!')
  }
  return (
    <div className="box">
      <h1>{props.name}</h1>
    <p>Age: {props.age}</p>
    <p>Title : {props.title}</p>
    <button onClick={handleClick}>Click?</button>
    </div>
  )
}
export default Box;