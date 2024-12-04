// Add in App.tsx

import { useState } from "react";
import ListGroupIterate from "./ListGroupIterate";

interface Detail {
  population: number;
  area: number;
}

// Using Props to Pass The Data & function;
// those are immutables
interface Props {
  items: string[];
  heading: string;
  details: Detail;
  onSelectItem: (item: string) => void;
}

function UseStateEx({ items, heading, details, onSelectItem }: Props) {
  const [count, setCounter] = useState(0); // count is variable and setCounter is special function,
  const [name, setName] = useState("");

  // Here if i write heading =''xyz' , it doesnot change it as props are immutable

  const increment = () => {
    setCounter(count + 1); // we need to define it in this way.
    //  setCounter()
    //    count = count+1;   //Note we cannot call, it like a normal function
  };

  const decrement = () => {
    setCounter(count - 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value); // Update the state with the input's value
  };

  const handleChangeAdd = (event: React.SyntheticEvent) => {
    console.log(event.target.addEventListener); // Update state with input value
  };

  // const updateName = (event) => {
  //   console.log(event);
  // };

  return (
    <>
      <div>
        <h3>Enter Name</h3>
        <input
          type="text"
          value={name}
          onChange={handleChange} // Event is automatically passed here
          placeholder="Enter your name"
        />
        <p>Your name is: {name}</p>

        <></>

        <button onClick={() => onSelectItem(name)}> | Click | </button>
      </div>
      <div>
        <button onClick={increment}>Click To Increase</button>
        <button onClick={decrement}>Click To Decrease</button>
        <p>Counter : {count}</p>
      </div>
      <div>
        <h1>{heading}</h1>
        <>
          <h3>Names are : {items.map((state) => state + " ")}</h3>
          <br />

          <p>
            total area : <ins>{details.area}</ins>
          </p>
          <p>
            total population : <s>{details.population}</s>
          </p>
          <p>
            This is <span>important</span> text.
          </p>

          <div>
            <p>New World !!!</p>
            <ListGroupIterate />
            <br />
            <p>List Group Ends Here !!!!</p>
          </div>
        </>
      </div>
    </>
  );
}

export default UseStateEx; // // Note  UseStateEx is Func , UseStateEg tsx file

// proxy
// load blancer
//

// React.ChangeEvent<HTMLInputElement>: For input elements.
// React.ChangeEvent<HTMLTextAreaElement>: For textarea elements.
// React.ChangeEvent<HTMLSelectElement>: For select elements.
