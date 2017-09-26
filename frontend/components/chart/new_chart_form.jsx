import React from 'react';

class NewChartForm extends React.Component {
  constructor(props) {
    super(props);

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

  chartTypeDropdown() {
    return(
      <select name='chart_type'>
        <option selected='true' disabled='disabled'>Chart Type</option>
        <option value='line'>Line</option>
        <option value='circle'>Circle</option>
        <option value='bar'>Bar</option>
        <option value='plot'>Plot</option>
      </select>
    );
  }

  chartSortDropdown() {
    return(
      <select name='chart_sort'>
        <option selected='true' disabled='disabled'>Sorting</option>
        <option value='x-asc'>X Ascending</option>
        <option value='x-desc'>X Descending</option>
        <option value='y-asc'>Y Ascending</option>
        <option value='y-desc'>Y Descending</option>
      </select>
    );
  }

  datasetDropdown() {
    const avaliableDatasets = this.props.datasets;
    return(
      <select name='dataset_id'>
        <option selected='true' disabled='disabled'>Select Dataset</option>

      </select>
    );
  }

}
