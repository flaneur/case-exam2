import logo from "./logo.svg";
import "./App.css";
import RegisterBlock from "./Components/RegisterBlock";
import QuestionBlock from "./Components/QuestionBlock";
import React from "react";
import { ValuesProvider, ContextAppValues } from "./Utilities/ContextBlock";
var responseData = {};
function App() {
  const [shownPage, setShownPage] = React.useState(0);
  const context = React.useContext(ContextAppValues);
  return (
    <div className='App'>
      {context.Status === "Not Started" && <RegisterBlock />}
      {context.Status === "Started" && <QuestionBlock />}
      <h4>{JSON.stringify(context)}</h4>
    </div>
  );
}

export default App;
