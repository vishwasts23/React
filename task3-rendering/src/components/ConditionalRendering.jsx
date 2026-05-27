import React from "react";

import Login from "./Login";
import Home from "./Home";

export default function ConditionalRendering({ isLoggedIn }) {

  return (

    <div>

      <h1 className="title">Conditional Rendering</h1>

      {isLoggedIn ? <Home /> : <Login />}

    </div>

  );
}