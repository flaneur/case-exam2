import { useState, useContext } from "react";
import React from "react";
const ContextAppValues = React.createContext(null);

const ValuesProvider = (props) => {
  const [registeryResponseData, setRegisteryResponseData] = useState({
    Status: "Not Started",
  });

  // function setValueTotal(object) {
  function setValueContext(object) {
    setRegisteryResponseData((prevData) => Object.assign({}, prevData, object));
  }

  return (
    <ContextAppValues.Provider
      value={{ ...registeryResponseData, setValueContext }}
    >
      {props.children}
    </ContextAppValues.Provider>
  );
};

export { ValuesProvider, ContextAppValues };
