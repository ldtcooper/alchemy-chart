import React from 'react';
import {LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class ChartMaker extends React.Component {
  constructor(props) {
    super(props);
  }

  parseData() {
    //find the indicies that match the headers
    let data = [];
    const xInd = this.props.dataset[0].findIndex(this.props.x_axis);
    const yInd1 = this.props.dataset[0].findIndex(this.props.y_axis1);
    const yInd2 = this.props.dataset[0].findIndex(this.props.y_axis2);
    // iterate through dataset to find and index correct data
    // if two y-axes
    if (yInd2) {
      for (let i = 1; i < this.props.dataset.length; i++) {
        data.push({
          [this.props.x_axis]: this.props.dataset[i][xInd],
          [this.props.y_axis1]: this.props.dataset[i][yInd1],
          [this.props.y_axis2]: this.props.dataset[i][yInd2]
        });
      }
    // if only one y axis
    } else {
      for (let i = 1; i < this.props.dataset.length; i++) {
        data.push({
          [this.props.x_axis]: this.props.dataset[i][xInd],
          [this.props.y_axis1]: this.props.dataset[i][yInd1]
        });
      }
    }

    switch (this.props.chart_sort) {
      case 'x-asc':
        return data.sort( (a, b) => (
          a[this.props.x_axis] < b[this.props.x_axis]
        ));
      case 'x-desc':
        return data.sort( (a, b) => (
          a[this.props.x_axis] > b[this.props.x_axis]
        ));
      case 'y-asc':
        return data.sort( (a, b) => (
          a[this.props.y_axis1] < b[this.props.y_axis1]
        ));
      case 'y-desc':
        return data.sort( (a, b) => (
          a[this.props.y_axis1] > b[this.props.y_axis1]
        ));
    }
    return data;
  }


  lineChart() {
    if (this.props.y_axis2) {
      return(
        <LineChart width={100} height={100} data={this.parseData()}>
          <XAxis dataKey={this.props.x_axis} />
          <YAxis />
          <CartesianGrid stroker='#BDBDBD' strokeDasharray='5 5'/>
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey={this.props.y_axis1} stroke='#00796B'/>
          <Line type='monotone' dataKey={this.props.y_axis2} stroke='#B2DFDB'/>
        </LineChart>
      );
    } else {
      return(
        <LineChart width='100%' height='100%' data={this.parseData()}>
          <XAxis dataKey={this.props.x_axis} />
          <YAxis />
          <CartesianGrid stroker='#BDBDBD' strokeDasharray='5 5'/>
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey={this.props.y_axis1} stroke='#009688'/>
        </LineChart>
      );
    }
  }

  circleChart() {
      return(
        <PieChart width='100%' height='100%'>
          <Pie data={this.parseData()} fill='#009688' label/>
        </PieChart>
      );
  }

  barChart() {

  }

  scatterPlot() {

  }

  render() {
    let renderedChart;
    switch (this.props.chart_type) {
      case "line":
      renderedChart = this.lineChart();
      break;
      case "circle":
        renderedChart = this.circleChart();
        break;
      case "bar":
        renderedChart = this.barChart();
        break;
      case "scatter":
        renderedChart = this.scatterPlot();
        break;
    }
    return(
      <div className='chart-div'>
        {renderedChart}
      </div>
    );
  }

}

export default ChartMaker;
