import React from 'react';

const DatasetListItem = ({ dataset, handleDelete }) => {
  return(
    <tr>
      <td>{dataset.name}</td>
      <td>{dataset.type}</td>
      <td>
        <button onClick={ () => handleDelete(dataset.id)}>
          <i className="material-icons">delete</i>
        </button>
      </td>
    </tr>
  );
};

export default DatasetListItem;
