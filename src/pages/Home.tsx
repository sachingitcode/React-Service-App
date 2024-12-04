import { Fragment } from "react/jsx-runtime";
import Contact from "./Contact";
import About from "./About";
import "./Home.css";
import Message from "../Message";
import UseStateEx from "../components/UseStateEg";
import Alert from "../components/AlertClass";

const Home = () => {
  //Note how to initilise the Details Object and pass in props
  const Detail = {
    population: 123,
    area: 764,
  };
  const handleSelectItem = (item: string) => {
    alert("Hi " + item);
    console.log(item);
  };

  const layout = (
    <Fragment>
      <Alert text="Home Page ">
        <>
          <p>Hello Yo Yo in Home Page</p>
          <label>
            <strong>Working</strong>
          </label>
        </>
      </Alert>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <h2>CSS Layout Float</h2>
      <p>
        In this example, we have created a header, two columns/boxes and a
        footer. On smaller screens, the columns will stack on top of each other.
      </p>
      <p>
        Resize the browser window to see the responsive effect (you will learn
        more about this in our next chapter - HTML Responsive.)
      </p>

      <header>
        <h2>Cities</h2>
      </header>

      <section>
        <nav>
          <ul>
            <li>
              <a href="#">London</a>
            </li>
            <li>
              <a href="./About">Paris</a>
            </li>
            <li>
              <a href="#">Tokyo</a>
            </li>
          </ul>
        </nav>

        <article>
          <h1>London</h1>
          <p>
            London is the capital city of England. It is the most populous city
            in the United Kingdom, with a metropolitan area of over 13 million
            inhabitants.
          </p>
          <p>
            Standing on the River Thames, London has been a major settlement for
            two millennia, its history going back to its founding by the Romans,
            who named it Londinium.
          </p>
        </article>
      </section>

      <footer>
        <p>Footer</p>
      </footer>

      <section>
        <h1> </h1>
        <>
          <UseStateEx
            items={["Delhi", "Goa", "Bihar", "UP"]}
            heading={"States"}
            details={Detail}
            onSelectItem={handleSelectItem}
          />
        </>
        <></>
        <br />
        <Message />
      </section>
    </Fragment>
  );

  return layout;
  // NOT useing
  let sam = (
    <Fragment>
      <div>
        <h1>Home </h1>
        <div>Home Page </div>
      </div>
      <div className="list-group">
        <a
          href="./Careers"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          Home
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Careers
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Contact
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          About
        </a>
        <Home />
        <Contact />
        <About />
      </div>
    </Fragment>
  );
};

export default Home;
