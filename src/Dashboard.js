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
    return (
      <div>
        <Selector onSubmit={this._onSubmit.bind(this)} />
        <TrainInfo array={this.state.focus} />
      </div>
    );
  }
}

export default Dashboard;
