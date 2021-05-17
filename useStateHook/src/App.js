import React ,{useState}from "react";
import "./App.css";
const App = () => {
 // console.log('useState :>> ', useState("Rohit")[0]);

 

var  [myName ,setMyName]= useState('Rohit')

  //var myName = "Bhardwaj";
  const changeName = () => {
   // myName = "anand";
    
    let val = myName;

    // if(val === 'Rohit'){
    //   setMyName('Anand')
    // }else{
    //   setMyName('Rohit')
    // }

val === 'Rohit'?setMyName('Anand'):setMyName('Rohit')

    console.log("myName :>> ", myName);
  };

  return (
    <div>
      <h1>{myName}</h1>
      <button className="btn" onClick={changeName}>
        click me
      </button>
    </div>
  );
};

export default App;
