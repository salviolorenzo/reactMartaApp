import React from 'react';

function createListItems(array) {
  let newArray = array.map((item, index) => {
    return (
      <ul key={index} className="train">
        <li>Destination: {item.DESTINATION}</li>
        <li>Line: {item.LINE}</li>
        <li>Next Arrival: {item.NEXT_ARR}</li>
      </ul>
    );
  });
  return newArray;
}

function TrainInfo(props) {
  return <div>{createListItems(props.array)}</div>;
}

export default TrainInfo;
