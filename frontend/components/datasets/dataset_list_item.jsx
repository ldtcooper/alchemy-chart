import React from 'react';

const DatasetListItem = ({ dataset }) => {
  return(
    <li>
        <p>{dataset.name}</p>
        <p>{dataset.type}</p>
        <p><i className="material-icons">delete</i></p>
    </li>
  );
};

export default DatasetListItem;
