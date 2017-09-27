import React from 'react';
import ChartMaker from './new_chart_creator';

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

  chartForm() {
    const chartType = this.chartTypeDropdown();
    const chartSort = this.chartSortDropdown();
    const datasetSelect = this.datasetDropdown();
    const chartNameField = this.chartName();
    const xAxis = this.axisSelect('x_axis', 'X Axis');
    const yAxis1 = this.axisSelect('y_axis1', 'Y Axis One');
    const yAxis2 = this.axisSelect('y_axis1', 'Y Axis Two (Optional)');
    return(
      <div className='chart-form'>
        {chartType}
        {chartSort}
        {datasetSelect}
        {chartNameField}
        {xAxis}
        {yAxis1}
        {yAxis2}
      </div>
    );
  }

  render() {
    const chartForm = this.chartForm();
    if (this.state.dataset && this.state.chart_sort && this.state.chart_type && this.state.x_axis && this.state.y_axis1) {
      return (
        <div className="chart-page">
          {chartForm}
          <ChartMaker {...this.state}/>
        </div>
      );
    } else {
      return (
        <div className="chart-page">
          {chartForm}
        </div>
      );
    }

  }

}

export default NewChartForm;
