import React, { ReactNode } from "react";
import PropTypes from "prop-types";

interface Props {
  // children?: ReactNode;
  text: string;
  handleClick: () => void; // we write this to simple initiliase a func and value is void. like above string is initised with null
}

const Button = ({ text, handleClick }: Props) => {
  return (
    <button
      onClick={handleClick}
      className="btn btn-primary alert-warning alert-dismissible fade show"
    >
      <strong> {text}</strong>
    </button>
  );
};

export default Button;

{
  /*    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

     <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> */
}
