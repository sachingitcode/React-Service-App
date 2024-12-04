import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import ListGroupIterate from "./components/ListGroupIterate";
import UseStateEx from "./components/UseStateEg"; // Note  UseStateEx is Func , UseStateEg tsx file
import Home from "./pages/Home";

// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <div className="App">
//       <div  >
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h4>Vite + React</h4>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//      <div> <Message />
//      </div>
//     </div>
//   )
// }
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
