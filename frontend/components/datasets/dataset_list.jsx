import React from 'react';
import DatasetListItem from './dataset_list_item';

const ColNames = () => (
  <ul className='dataset-list-header'>
    <li>Name</li>
    <li>Type</li>
    <li>Delete</li>
  </ul>
);

const DatasetList = ({datasets, seeAllDatasets, removeDataset}) => {
  return(
    <div>
      <h2>Datasets</h2>
      <ul>
        {ColNames}
        {
          datasets.map( (el) => {
            return(<DatasetListItem key={el.id} dataset={el} />);
          })
        }
      </ul>
    </div>
  );
};

export default DatasetList;
