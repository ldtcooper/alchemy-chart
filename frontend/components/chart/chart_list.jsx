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
      <div id='data'>
        <h2>Charts</h2>
      </div>
    );
  }
}


export default ChartList;
