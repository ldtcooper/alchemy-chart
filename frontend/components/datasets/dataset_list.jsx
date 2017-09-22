import React from 'react';
import DatasetListItem from './dataset_list_item';

class DatasetList {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.seeAllDatasets();
  }

  colNames() {
    return(
      <ul className='dataset-list-header'>
        <li>Name</li>
        <li>Type</li>
        <li>Delete</li>
      </ul>
    );
  }

  render() {
    const ColNames = this.colNames();
    return(
      <div>
        <h2>Datasets</h2>
        <ul>
          {ColNames}
          {
            this.props.datasets.map( (el) => {
              return(
                <DatasetListItem
                  key={el.id}
                  dataset={el}
                />
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default DatasetList;
