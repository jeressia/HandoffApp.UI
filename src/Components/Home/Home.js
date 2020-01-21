import React, { Component } from 'react';
import './Home.scss';

export class Home extends Component {
  render() {
    return (
            <div>
                <div className="testBar">
                    <span><input></input></span>
                    <span>Account</span>
                    <span>Cart</span>
                </div>
                <div className="testNav">
                    <span className="page-title">The Handoff</span>
                    <span className="nav-filters">
                        <a href="">Shop by Sport</a>
                        <a href="">Shop by Age</a>
                    </span>
                </div>
                <div className="main-container">
                </div>
            </div>
    );
  }
}

export default Home;
