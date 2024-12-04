import Message from "../Message";
import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";
import ListGroup from "./ListGroup";

function ListGroupIterate() {
  const cities = ["Fbd", "Delhi", "Ggn", "Noida"];

  // JS to iterate
  cities.map((city) => <li>{city}</li>);

  // Note this is function
  const getMessage = () => {
    return cities.length === 0 ? <p>No item Found</p> : <p>List is :</p>;
  };
  const getMessages =
    cities.length === 0 ? <p>No item Found</p> : <p>New List is :</p>;

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <Fragment>
      <h2>City List</h2>
      {getMessage()}
      {getMessages}
      <div className="list-group">
        {cities.map((city) => (
          <li className="list-group-item" key={city} onClick={handleClick}>
            {city}
          </li>
        ))}
      </div>
    </Fragment>
  );
}
// JSX cann to have for loop, so we can not write
// for loop
// Note We can use  this in function

export default ListGroupIterate;
