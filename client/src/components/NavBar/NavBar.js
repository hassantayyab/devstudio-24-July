import React, { Component } from 'react';
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux';
// import { getCustomers } from '../../store/actions/customer'
import { Link } from "react-router-dom";
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">EMAGS</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/Home">Home</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/Edito">Edito</Link>
              </li>
              <li className="nav-item dropdown active">
                <Link className="nav-link dropdown-toggle" to="/Focus" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Focus
                </Link>
                <div className="dropdown-menu dark" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to="/SP1">SP 1</Link>
                  <Link className="dropdown-item" to="/SP2">SP 2</Link>
                  <Link className="dropdown-item" to="/SP3">SP 3</Link>
                  <Link className="dropdown-item" to="/SP4">SP 4</Link>
                </div>
              </li>
              <li className="nav-item dropdown active">
                <Link className="nav-link dropdown-toggle" to="/Focus" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Debate
                </Link>
                <div className="dropdown-menu dark" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to="/SP1">SP 1</Link>
                  <Link className="dropdown-item" to="/SP2">SP 2</Link>
                  <Link className="dropdown-item" to="/SP3">SP 3</Link>
                  <Link className="dropdown-item" to="/SP4">SP 4</Link>
                </div>
              </li>
              <li className="nav-item dropdown active">
                <Link className="nav-link dropdown-toggle" to="/Focus" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Reperes
                </Link>
                <div className="dropdown-menu dark" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to="/SP1">SP 1</Link>
                  <Link className="dropdown-item" to="/SP2">SP 2</Link>
                  <Link className="dropdown-item" to="/SP3">SP 3</Link>
                  <Link className="dropdown-item" to="/SP4">SP 4</Link>
                </div>
              </li>
              <li className="nav-item dropdown active">
                <Link className="nav-link dropdown-toggle" to="/Focus" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Investir
                </Link>
                <div className="dropdown-menu dark" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to="/SP1">SP 1</Link>
                  <Link className="dropdown-item" to="/SP2">SP 2</Link>
                  <Link className="dropdown-item" to="/SP3">SP 3</Link>
                  <Link className="dropdown-item" to="/SP4">SP 4</Link>
                </div>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/Edito">En Chiffres</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/Edito">En Images</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
