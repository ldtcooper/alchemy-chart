import React from 'react';

const DatasetListItem = ({ dataset, removeDataset }) => {
  return(
    <tr>
      <td>{dataset.name}</td>
      <td>{dataset.type}</td>
      <td>
        <button onClick={ () => removeDataset(dataset.id)}>
          <i className="material-icons">delete</i>
        </button>
      </td>
    </tr>
  );
};

export default DatasetListItem;
