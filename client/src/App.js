import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom"
import logo from './logo.svg'
import './App.css'
import store from './store'
import Customers from './components/Customer/customers'
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import Edito from "./components/Edito/Edito"

class App extends Component {

  render() {
    return (
      <Router >
        <div className="App" >
          <NavBar />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Edito" component={Edito} />
        </div >
      </Router>
    )
  }
}

export default App
