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
      dataset: {}
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
    let dataId = event.target.value;
    this.props.getDataset(dataId).then(() =>
      this.setState({dataset: this.props.currentDataset.data_text})
    );
  }

  chartTypeDropdown() {
    return(
      <div className="chart-dropdown">
        <label>Chart Type:
          <select name='chart_type' value={this.state.chart_type} onChange={this.handleChange}>
            <option disabled>Select Chart Type</option>
            <option value='line'>Line</option>
            <option value='circle'>Circle</option>
            <option value='bar'>Bar</option>
            <option value='scatter'>Scatter</option>
          </select>
        </label>
      </div>
    );
  }

  chartSortDropdown() {
    return(
      <div className="chart-dropdown">
        <label >Chart Sorting:
          <select name='chart_sort' value={this.state.chart_sort} onChange={this.handleChange}>
            <option disabled>Select Chart Sort</option>
            <option value='x-asc'>X Ascending</option>
            <option value='x-desc'>X Descending</option>
            <option value='y-asc'>Y Ascending</option>
            <option value='y-desc'>Y Descending</option>
          </select>
        </label>
      </div>
    );
  }

  datasetDropdown() {
    const avaliableDatasets = this.props.datasets.map( (el) => {
      return( <option key={el.id} value={el.id}>{el.name}</option>);
    });
    return(
      <div className="chart-dropdown" id="dataset-choice">
        <select name='dataset_id' defaultValue='default' onChange={this.handleDatasetChange}>
          <option value='default' disabled>Select Dataset</option>
          {avaliableDatasets}
        </select>
      </div>
    );
  }

  chartName() {
    return(
      <div className='chart-name-field'>
        <label>Name:
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange}></input>
        </label>
      </div>
    );
  }

  axisSelect(axisCode, axisName) {
    let avaliableAxes;
    if (Array.isArray(this.state.dataset)) {
      avaliableAxes = this.state.dataset[0].map( (el, ind) => (
        <option key={ind} value={el}>{el}</option>
      ));
    } else {
      avaliableAxes = Object.keys(this.state.dataset).map( (el, ind) => (
        <option key={ind} value={el}>{el}</option>
      ));
    }
    return(
      <div className='axis-dropdown'>
        <label>{axisName}:
          <select name={axisCode} defaultValue='default' onChange={this.handleChange}>
            <option value='default' disabled>Select {axisName}</option>
            {avaliableAxes}
          </select>
        </label>
      </div>
    );
  }

  render() {
    const typeDropdown = this.chartTypeDropdown();
    const sortDropdown = this.chartSortDropdown();
    const dataDropdown = this.datasetDropdown();
    const nameField = this.chartName();
    const xAxisSelect = this.axisSelect('x_axis', 'X Axis');
    const y1AxisSelect = this.axisSelect('y_axis1', 'First Y Axis');
    const y2AxisSelect = this.axisSelect('y_axis2', 'Second Y Axis (Optional)');
    return (
      <div className="chart-page">
        <form className="chart-form">
          {dataDropdown}
          {typeDropdown}
          {sortDropdown}
          {nameField}
          {xAxisSelect}
          {y1AxisSelect}
          {y2AxisSelect}
        </form>
      </div>
    );
  }

}

export default NewChartForm;
