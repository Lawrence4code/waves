import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <header className="bck_b_light">

        <div className="container">
          <div className="left">
            <div className="logo">
              waves
            </div>
          </div>
          <div className="right">
            <div className="top"> Links </div>
            <div className="bottom"> Links </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;