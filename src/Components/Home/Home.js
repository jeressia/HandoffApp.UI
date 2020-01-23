import React, { Component } from 'react';

import { Jumbotron, Button } from 'reactstrap';
import './Home.scss';

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="testBar">
          <div className="barNav">
            <span className="searchbar">
              <input></input>
            </span>
            <span className="accountNav">Account</span>
            <span className="cartNav">Cart</span>
          </div>
        </div>
        <div className="testNav">
          <div className="navPosition">
            <span className="page-title">The Handoff</span>
            <span className="nav-filters">
              <a href="/Home">Shop by Sport</a>
              <a href="/Home">Shop by Age</a>
            </span>
            <span className="navSpace"></span>
          </div>
        </div>
          <Jumbotron>
            <h1 className="display-3">Your Sports Needs</h1>
            <p className="lead">
              Somthing catchy about sports
            </p>
            <hr className="my-2" />
            <p>
              Other text
            </p>
            <p className="lead">
              <Button color="primary">Shop Now</Button>
            </p>
          </Jumbotron>
          <div className="main-container">
        </div>
      </div>
    );
  }
}

export default Home;
