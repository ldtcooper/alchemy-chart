import React from 'react';

const DatasetListItem = ({ dataset }) => {
  return(
    <li>
      <ul>
        <li>{dataset.name}</li>
        <li>{dataset.type}</li>
        <li><i className="material-icons">delete</i></li>
      </ul>
    </li>
  );
};

export default DatasetListItem;
