import React, { useState } from "react";

const UseStateArray = () => {
  let bioData = [
    {
      id: 0,
      myName: "Anand",
      age: 25,
    },
    {
      id: 1,
      myName: "Krish",
      age: 5,
    },
    {
      id: 2,
      myName: "Kum",
      age: 2,
    },
  ];
  console.log("bioData :>> ", bioData);

  const [myArr, setMyArr] = useState(bioData);

const clearArr = ()=>{
    setMyArr([]);
}

  

  return (
    <>
      {myArr.map((curEle) => (
        <h1 className="h1Style">
          Name:{curEle.myName}&Age:{curEle.age}
        </h1>
      ))}
      <button className='btn' onClick={clearArr()}>Clear</button>
    </>
  );
};

export default UseStateArray;
