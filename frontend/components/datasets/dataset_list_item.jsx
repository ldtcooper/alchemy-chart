import React from 'react';

const DatasetListItem = (key, dataset, removeDataset) => (
  <li>
    <ul>
      <li>{dataset.name}</li>
      <li>{dataset.type}</li>
      <li><i class="material-icons">delete</i> onClick=</li>
    </ul>
  </li>
);

export default DatasetListItem;
