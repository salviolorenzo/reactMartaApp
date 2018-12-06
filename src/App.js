import React, { Component } from 'react';
import Dashboard from './Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
// Some possible features:

// Set an interval so that you can pull updated train information every few seconds
// Add a dropdown showing the different line names (e.g., Blue, Red, Gold) so the user only sees trains on that line
// Some trains are listed multiple times in the array. Filter out duplicates before you save the train info in state.
