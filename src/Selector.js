import React from 'react';

function Selector(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <select name="select">
        <option value="BLUE">Blue</option>
        <option value="RED">Red</option>
        <option value="GREEN">Green</option>
        <option value="GOLD">Gold</option>
      </select>
      <input type="submit" />
    </form>
  );
}

export default Selector;
