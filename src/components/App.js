import React from "react";
import { useRef } from "react/cjs/react.production.min";
import "../styles/App.css";
const App = () => {

  let count = 0;

  

  const handleDoubleClick = (event) => {
    event.preventDefault();
    count += 1;

    // if (count === 1) {
    //   timeout = setTimeout(() => {
    //     count = 0;
    //     console.log("I was not double clicked");
    //   }, 300);
    // } 
    // if(count === 2){
    //   clearTimeout(timeout);
    //   count = 0;
    //   console.log("I was double clicked");
    // }
    
    setTimeout(() => {
      if (count === 1) {
        console.log('I was not double clicked');
      } else if (count === 2) {
        console.log("I was double clicked");
      }
      count = 0;
    }, 300);

    
  };
  return (
    <div id="main">
      <button onClick={handleDoubleClick} id="dblclick-btn">
        Double click me
      </button>
    </div>
  );
};

export default App;
