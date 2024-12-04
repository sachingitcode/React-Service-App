import React, { ReactNode } from "react";

interface Props {
  //text: string;
  // here children is special keyword, which handles the children of Alert
  // ReactNode is used we children has complex structure like html css. here if children of text type, then we defind text, but here er are passing html
  children: ReactNode;
  color?: "Priamry" | "Secondary" | "Danger";
  text: string;
}

const AlertClass = ({ children, color }: Props) => {
  return <div className={"alert alert-" + color}>{children}</div>;
};

export default AlertClass;
