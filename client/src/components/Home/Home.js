import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage1: '',
      backgroundImage2: '',
      backgroundImage3: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="myDiv" >
        <form onSubmit={ this.handleSubmit }>
          <div className="row">
            <div className="col">
              <label htmlFor="backgroundImage">Background Image</label>
              <input name="backgroundImage1" autoFocus onChange={ this.handleChange } required type="url" className="form-control" placeholder="Enter background image url" />
            </div>
            <div className="col">
              <label htmlFor="backgroundImage">Background Image</label>
              <input name="backgroundImage2" onChange={ this.handleChange } required type="url" className="form-control" placeholder="Enter background image url" />
            </div>
            <div className="col">
              <label htmlFor="backgroundImage">Background Image</label>
              <input name="backgroundImage3" onChange={ this.handleChange } required type="url" className="form-control" placeholder="Enter background image url" />
            </div>
          </div>
          {/* <div className="row">
            <div className="col">
              <label htmlFor="backgroundImage">Background Image</label>
              <input required type="url" className="form-control" placeholder="Enter background image url" />
            </div>
            <div className="col">
              <label htmlFor="backgroundImage">Background Image</label>
              <input required type="url" className="form-control" placeholder="Enter background image url" />
            </div>
            <div className="col">
              <label htmlFor="backgroundImage">Background Image</label>
              <input required type="url" className="form-control" placeholder="Enter background image url" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="backgroundImage">Background Image</label>
              <input required type="url" className="form-control" placeholder="Enter background image url" />
            </div>
            <div className="col">
              <label htmlFor="backgroundImage">Background Image</label>
              <input required type="url" className="form-control" placeholder="Enter background image url" />
            </div>
            <div className="col">
              <label htmlFor="backgroundImage">Background Image</label>
              <input required type="url" className="form-control" placeholder="Enter background image url" />
            </div>
          </div> */}

          <input type="submit" className="btn btn-success" value="SUBMIT" />
        </form>
      </div>
    );
  }
}

export default Home;