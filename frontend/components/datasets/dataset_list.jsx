import React from 'react';
import DatasetListItem from './dataset_list_item';

class DatasetList extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.seeAllDatasets();
  }

  render() {
    return(
      <div id='datasets-list-div'>
        <h2>Datasets</h2>
        <ul id='datasets-list'>
          <li className='dataset-list-header'>
            <p>Name</p>
            <p>Type</p>
            <p>Delete</p>
          </li>
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
