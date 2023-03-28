import React from "react";
import { Link } from 'react-router-dom';
import Header from "../Header";
import './info.css'

function Container() {
  return (
    <div>
  <div class="pic">
      
      </div>
      <div className="menu">
        <h2>les categories:</h2>
        <ul>
          <li>
            <Link to="/Info" style={{ color: "rgb(148, 148, 214)", textDecoration: "none" }}>
              informatique
            </Link>
          </li>
          <li>
            <Link to="/Mecanic" style={{ color: "rgb(148, 148, 214)", textDecoration: "none" }}>
              mecanique
            </Link>
          </li>
          <li>
            <Link to="/Electric" style={{ color: "rgb(148, 148, 214)", textDecoration: "none" }}>
              electronique
            </Link>
          </li>
          <li>
            <Link to="/Economie" style={{ color: "rgb(148, 148, 214)", textDecoration: "none" }}>
              Economie
            </Link>
          </li>
          <li>
            <Link to="/Math" style={{ color: "rgb(148, 148, 214)", textDecoration: "none" }}>
              Math
            </Link>
          </li>
        </ul>
      </div>
      <div className="warning" style={{ animation: ' blink 2s infinite' }}>
        <p>warning !:Vous avez le droit que dans 4 Livres et dans une duree de 7 jours</p>
      </div>
      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">

            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>information</p>
              <button className="btn">read more...</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              

            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>information</p>
              <button className="btn">read more...</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
            

            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>information</p>
              <button className="btn">read more...</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
function Electric() {
  return (
    <div className="App">
      <Container />
      <Header />
    </div>
  );
}
export default Electric;

