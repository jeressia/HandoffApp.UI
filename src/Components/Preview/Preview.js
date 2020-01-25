import React, { Component } from 'react';
import './Preview.scss';

import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
            <div>
                <div className="testBarPreview">Voted #1 Sports Equipment Trading Site of 2020</div>
                <div className="testNav">
                    <span className="page-title">The Handoff</span>
                    <span className="nav-options">
                        <Link to="/MyHome">Login |</Link>
                        <a href="/MyHome"> &nbsp;Sign-up</a>
                    </span>
                </div>
                <div className="home-container">
                    <div className="shop-side">
                        <Link to="/MyHome" className="btn btn-light shopBtn">Shop Now</Link>
                    </div>
                    <div className="sell-side">
                        <button className="btn btn-dark sellBtn">Sell Now</button>
                    </div>
                </div>
            </div>
    );
  }
}

export default Home;
