import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

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

  componentDidMount() {
    this.props.getDatasets();
  }

  handleChange(event) {
      let name = event.target.name;
      let value = event.target.value;
      this.setState({[name]: value});
  }

  handleDatasetChange(event) {
      let dataId = event.target.key;
      this.props.getDataset(dataId);
  }

  chartTypeDropdown() {
    return(
      <div className="chart-dropdown">
        <label htmlFor='chart_type'>Chart Type:</label>
        <select name='chart_type' onChange={this.handleChange}>
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
        <label htmlFor='chart_sort'>Chart Sorting:</label>
        <select name='chart_sort' onChange={this.handleChange}>
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
      return( <option key={el.id}>{el.data_name}</option>);
    });

    return(
      <div className="chart-dropdown" id="dataset-choice">
        <select name='dataset_id' defaultValue='default'>
          <option value='default' disabled='disabled'>Select Dataset</option>
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
        <form className="chart-form">
          {dataDropdown}
          {typeDropdown}
          {sortDropdown}
        </form>
      </div>
    );
  }

}

export default NewChartForm;
