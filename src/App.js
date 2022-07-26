import React from "react";
import "./App.css";
import Navbar from "./componenets/Navbar";
import Body from "./componenets/Body";
import store from "./store";

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Body></Body>
    </>
  );
}
