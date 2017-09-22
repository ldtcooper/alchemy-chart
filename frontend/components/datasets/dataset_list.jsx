import React from 'react';
import DatasetListItem from './dataset_list_item';

class DatasetList extends React.Component{
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(event) {
    this.props.seeAllDatasets();
  }

  handleDelete(id) {
    this.props.removeDataset(id);
  }

  render() {
    return(
      <div id='datasets-list-div'>
        <h2>Datasets</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.datasets.map( (el) => {
                return(
                  <DatasetListItem
                    key={el.id}
                    dataset={el}
                    handleDelete={this.handleDelete}
                  />
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default DatasetList;
