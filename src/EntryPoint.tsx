import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import ListGroupIterate from "./components/ListGroupIterate";
import UseStateEx from "./components/UseStateEg"; // Note  UseStateEx is Func , UseStateEg tsx file
import Home from "./pages/Home";
import AlertCaller from "./components/AlertCaller";
import AlertCall from "./components/AlertCall";
import Button from "./components/Button";

interface Props {
  test: string;
}

// We cannot make usestate outside of func
//const [alertVisible, setAlertVisible] = useState(false);

function EntryPoint() {
  const [alertVisible, setAlertVisible] = useState(false);

  const onclick = () => {
    console.log("Clicked");
    setAlertVisible(true);
  };

  return (
    <div className="EntryPoint">
      <p>Hello ...</p>
      {alertVisible && (
        <AlertCall onClose={() => setAlertVisible(false)}>
          {" "}
          My Alert..
        </AlertCall>
      )}
      <Button text=" My Button.." handleClick={onclick} />
    </div>
  );
}

export default EntryPoint;

// <AlertCall text="My Alert call" />

{
  /* <Button
        text="Hello"
        handleClick={onclick}
        children={}
      ></Button> */
}
