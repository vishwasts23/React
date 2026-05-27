import React from "react";
import "./App.css";

import ConditionalRendering from "./components/ConditionalRendering";
import ListRendering from "./components/ListRendering";

export default function App() {

  const isLoggedIn = true;

  return (
    <>

      <ConditionalRendering isLoggedIn={isLoggedIn} />

      {isLoggedIn && <ListRendering />}

    </>
  );
}