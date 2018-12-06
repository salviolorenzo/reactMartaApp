import React, { Component } from 'react';
import TrainInfo from './TrainInfo';
import Selector from './Selector';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      focus: []
    };
  }

  componentDidMount() {
    setInterval(() => {
      fetch(
        'https://my-little-cors-proxy.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1'
      )
        .then(r => r.json())
        .then(array => {
          let newArray = array;
          this.setState({
            items: newArray,
            focus: newArray
          });
        });
    }, 10000);
  }

  _onSubmit(event) {
    event.preventDefault();
    let array = this.state.items;
    let newArray = [];
    array.forEach(item => {
      if (item.LINE === event.target.select.value) {
        newArray.push(item);
      }
    });
    this.setState({
      focus: newArray
    });
  }

  render() {
    if (this.state.items.length === 0) {
      return (
        <div className="dashboard">
          <h1>MartaMartaMarta</h1>
          <h3>Loading...</h3>
        </div>
      );
    } else {
      return (
        <div className="dashboard">
          <h1>MartaMartaMarta</h1>
          <Selector onSubmit={this._onSubmit.bind(this)} />
          <TrainInfo array={this.state.focus} />
        </div>
      );
    }
  }
}

export default Dashboard;
