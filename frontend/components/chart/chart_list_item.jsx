import React from 'react';

const ChartListItem = ( {chart, deleteChart}) => (
  <tr>
    <td>{chart.name}</td>
    <td>{chart.chart_type}</td>
    <td>{chart.creator}</td>
    <td>
      <button>
        <i className="material-icons">share</i>
      </button>
    </td>
    <td>
      <button onClick={ () => deleteChart(chart.id)}>
        <i className="material-icons">delete</i>
      </button>
    </td>
  </tr>
);

export default ChartListItem;
