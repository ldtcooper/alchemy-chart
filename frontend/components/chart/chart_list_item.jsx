import React from 'react';

const ChartListItem = ( {chart, deleteDataset}) => (
  <tr>
    <td>{chart.name}</td>
    <td>{chart.type}</td>
    <td>{chart.creator}</td>
    <td>
      <button>
        <i class="material-icons">share</i>
      </button>
    </td>
    <td>
      <button onClick={ () => deleteDataset(chart.id)}>
        <i className="material-icons">delete</i>
      </button>
    </td>
  </tr>
);

export default ChartListItem;
