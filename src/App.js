import {useState, Component, Fragment} from "react";
import "./App.css";

import Card from "./components/Card";
import Modal from "./components/Modal";
import Filter from "./components/Filter";

class App extends Component {
  constructor() {
    super();

    this.state = {
      rockets: [],
      selectedHeight: 0
    };
  };

  componentDidMount() {
    fetch('http://localhost:8000/rockets')
      .then( (response) => response.json() )
      .then( (rockets) => this.setState( {
        rockets: rockets
      }));
  };

  handleChange = (event) => {
    this.setState({selectedHeight: event.target.value});
  }

  render() {
    const {rockets, selectedHeight} = this.state;
    const filteredRockets = rockets.filter((rocket) => 
      rocket.height.meters > selectedHeight
    );

    return (
      <div className="container">
      <h1>SpaceX Journal</h1>
      <Filter onChange={this.handleChange}/>
        <div className="row">
          {filteredRockets.map((rocket) => (
            <Fragment>
              <Card rocket={rocket} />
              <Modal rocket={rocket} />
            </Fragment>
          ))}
        </div>
      </div>
    );
  }

}

export default App;
