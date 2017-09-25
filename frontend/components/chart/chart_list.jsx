import React from 'react';
import ChartListItem from './chart_list_item';

class ChartList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(event) {
    this.props.seeAllCharts();
  }

  render() {
    let { deleteDataset } = this.props;
    return(
      <div id='list-div'>
        <h2>Charts</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Creator</th>
              <th>Share</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    );
  }
}


export default ChartList;
