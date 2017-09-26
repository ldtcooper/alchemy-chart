import React from 'react';

class NewChartForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDatasetChange = this.handleDatasetChange.bind(this);

    this.state = {
      name: "",
      chart_sort: "",
      chart_type: "",
      x_axis: "",
      y_axis1: "",
      y_axis2: "",
      dataset: {},
    };
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]: value});
  }

  handleDatasetChange(event) {
    let dataId = event.target.value;
    this.props.getDataset(dataId);
  }

  chartTypeDropdown() {
    return(
      <div className="chart-dropdown">
        <label for='chart_type'>Chart Type:</label>
        <select name='chart_type'>
          <option selected='true' disabled='disabled'>Chart Type</option>
          <option value='line'>Line</option>
          <option value='circle'>Circle</option>
          <option value='bar'>Bar</option>
          <option value='plot'>Plot</option>
        </select>
      </div>
    );
  }

  chartSortDropdown() {
    return(
      <div className="chart-dropdown">
        <label for='chart_sort'>Chart Sorting:</label>
        <select name='chart_sort'>
          <option selected='true' disabled='disabled'>Sorting</option>
          <option value='x-asc'>X Ascending</option>
          <option value='x-desc'>X Descending</option>
          <option value='y-asc'>Y Ascending</option>
          <option value='y-desc'>Y Descending</option>
        </select>
      </div>
    );
  }

  datasetDropdown() {
    const avaliableDatasets = this.props.datasets.map( (el) => {
      return( <option value={el.id}>{el.data_name}</option>);
    });

    return(
      <div className="chart-dropdown" id="dataset-choice">
        <select name='dataset_id'>
          <option selected='true' disabled='disabled'>Select Dataset</option>
          {avaliableDatasets}
        </select>
      </div>
    );
  }

  render() {
    const typeDropdown = this.chartTypeDropdown();
    const sortDropdown = this.chartSortDropdown();
    const dataDropdown = this.datasetDropdown();
    return (
      <div className="chart-page">
        {dataDropdown}
        {typeDropdown}
        {sortDropdown}
      </div>
    );
  }

}
