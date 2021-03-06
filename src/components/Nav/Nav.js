import React from "react";
import "./Nav.css";

const Nav = props => (
    <div className = "container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">Clicky Game</a>
                <a className="navbar-brand">Click an image to begin!</a>
                <a className="navbar-brand">Score {props.score}</a>
                <a className="navbar-brand">Goal 20</a>
            </nav>
     </div>       
);

export default Nav;
