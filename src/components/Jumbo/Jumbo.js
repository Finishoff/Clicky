import React from "react";
import "./Jumbo.css";

const Jumbo = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Clicky Game</h1>
        <h2>Gotta Catch em all!</h2>
        <h2>You have limited pokeballs.
          <br></br>
          In order to become a pokemon master you must only catch a pokemon once.
          <br>
          </br>
          Game is over if you click on the same Pokemon more than once.
        </h2>

        <h1>Some wild Pokemon has appeared!</h1>
      </div>
    </div>
  </div>
);

export default Jumbo;
