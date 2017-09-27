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

  handleSubmit(event) {
    event.preventDefault();
  }

  chartTypeDropdown() {
    return(
      <div className="chart-dropdown">
        <label>Chart Type:</label>
        <select name='chart_type' value={this.state.chart_type} onChange={this.handleChange}>
          <option disabled>Select Chart Type</option>
          <option value='line'>Line</option>
          <option value='circle'>Circle</option>
          <option value='bar'>Bar</option>
          <option value='scatter'>Scatter</option>
        </select>
      </div>
    );
  }

  chartSortDropdown() {
    return(
      <div className="chart-dropdown">
        <label >Chart Sorting:</label>
        <select name='chart_sort' value={this.state.chart_sort} onChange={this.handleChange}>
          <option disabled>Select Chart Sort</option>
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
      return( <option key={el.id} value={el.id}>{el.name}</option>);
    });
    return(
      <div className="chart-dropdown" id="dataset-choice">
        <label>Datset:</label>
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
        <label>Name:</label>
        <input type='text' name='name' value={this.state.name} onChange={this.handleChange}></input>
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
        <label>{axisName}:</label>
        <select name={axisCode} defaultValue='default' onChange={this.handleChange}>
          <option value=''>Select {axisName}</option>
          {avaliableAxes}
        </select>
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
    const yAxis2 = this.axisSelect('y_axis2', 'Y Axis Two (Optional)');
    return(
      <form className='chart-form'>
        {chartNameField}
        {datasetSelect}
        {chartType}
        {chartSort}
        {xAxis}
        {yAxis1}
        {yAxis2}
        <button type="submit" name="save" >Save!</button>
      </form>
    );
  }

  errorShow() {
    let errors = this.props.errors.map( (el, ind) => (
      <li key={ind}>{el}</li>
    ));
    return(
      <ul>
        {errors}
      </ul>
    );
  }

  render() {
    const chartForm = this.chartForm();
    const errors = this.errorShow();
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
          <div className='chart-div'>
            <div className='no-chart-box'>
              <h3>This is where the magic happens</h3>
              {errors}
            </div>
          </div>
        </div>
      );
    }

  }

}

export default NewChartForm;
