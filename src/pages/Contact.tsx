import ListGroup from "../components/ListGroup";
import ListGroupIterate from "../components/ListGroupIterate";
import UseStateEx from "../components/UseStateEg";
import Message from "../Message";

const Contact = () => {
  return (
    <div>
      <h1>Contact </h1>
      <div>This Page is under Development </div>

      <div>
        <UseStateEx />
      </div>
      <div>
        <Message />
      </div>
      <div>
        <ListGroup />
      </div>
      <div>
        <ListGroupIterate />
      </div>
    </div>
  );
};

export default Contact;
