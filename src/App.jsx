import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Header from "./components/Header";
// import InputField from "./components/InputField";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
