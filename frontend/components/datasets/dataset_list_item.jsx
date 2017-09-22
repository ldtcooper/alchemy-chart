import React from 'react';

const DatasetListItem = ({ dataset }) => {
  return(
    <tr>
        <td>{dataset.name}</td>
      <td>{dataset.type}</td>
    <td><i className="material-icons">delete</i></td>
    </tr>
  );
};

export default DatasetListItem;
