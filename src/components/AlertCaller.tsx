// This Page not working

import React, { useState } from "react";
// import Alert from "./Alert";

// const [alertStmt, setalertStmt] = useState("Yoooo");

const [inputKey, setinputKey] = useState("");

// const setAlert = (k: string) => {
//   console.log("Hi :" + inputKey);
// };

const setNewAlert = () => {
  console.log("Hi");
};

const AlertCaller = () => {
  return (
    <div>
      <p>Testing Argument Pass</p>

      <div>
        <input
          value={inputKey}
          onChange={(e) => setinputKey(e.target.value)}
          type="text"
          placeholder="Enter alert"
        />
        <br />
        <button onClick={setNewAlert}>Hello Button</button>
      </div>
    </div>
  );
};

export default AlertCaller;

// Here is a big Thing onClick requires function REFERENCE not the function
//onClick={setAlert("Hiiii")}:
// Here, setAlert("Hiiii") immediately invokes the setAlert function during the render phase,
// resulting in its return value (likely undefined) being passed to onClick
// React expects a function reference for the onClick handler, not the result of a function invocation. Hence, this causes an error.
//onClick={setNewAlert}: // This correctly passes the setNewAlert function reference to onClick. React invokes the function when the button is clicked.
/* <Alert text={alertStmt}>
        <strong>{alertStmt}</strong>
      </Alert> 
      
    /* <button onClick={setAlert("inputKey")}></button> */
/* <button onClick={() => setAlert("inputKey")}></button> */
