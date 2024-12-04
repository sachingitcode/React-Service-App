import React, { Children, ReactNode } from "react";
import PropTypes from "prop-types";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const AlertCall = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}

      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default AlertCall;
