import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Fragment,
  MouseEvent,
  useState,
} from "react";
import ListGroupIterate from "./components/ListGroupIterate";

function Message() {
  // NOTE everything is OUTSIDE  of message function HAHAHA **********

  const items = ["USA", "Rus", "China", "India", "Japan"];

  const [name, setName] = useState("");

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const hanndleClick = (event: MouseEvent) => {
    setSelectedIndex(selectedIndex);
    console.log(event);
  };

  // WE could have handled this inside  the <li> as this is 1 liner
  const hanndleClickNew = (index: number) => {
    console.log(index);
    setSelectedIndex(index);
  };

  let iterateList = items.map((item, index) => (
    <li
      key={index}
      // onClick={hanndleClick}
      className={
        selectedIndex === index ? "list-group-item active" : "list-group-item"
      }
      // onClick={() => {
      //   setSelectedIndex(index);
      // }}
      // ** NOTE this is the way to call a custom function
      onClick={() => {
        hanndleClickNew(index);
      }}
    >
      {item}
    </li>
  ));

  const list = (
    <>
      <div>
        <ol className="list-group">{iterateList}</ol>
      </div>
    </>
  );

  function GetName() {
    const names = "sachin";
    if (names) return <h2>Hello {names}</h2>;
    return <h2>Hello World</h2>;
  }

  return (
    <Fragment>
      <div> {GetName()} </div>
      <div> {list} </div>
    </Fragment>
  );
}

// This is crazy , 3rd param ie arrayWithRemoving1stElement
// let a = items.map((item, index, arrayWithRemoving1stElement) =>
//   console.log(item)
// );

// Need to export for larger use
export default Message;

// 50:50
