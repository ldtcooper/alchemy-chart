import React from 'react';
import {
  LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, BarChart, Bar
} from 'recharts';

class ChartMaker extends React.Component {
  constructor(props) {
    super(props);
  }

  numberOrString(str) {
    // tests if the strings from the dataset are numbers in disguise
    if (/^[0-9]*$/.test(str)) {
      return parseInt(str, 10);
    } else {
      return str;
    }
  }

  parseData() {
    //find the indicies that match the headers
    let data = [];
    const xInd = (this.props.dataset[0]).indexOf(this.props.x_axis);
    const yInd1 = (this.props.dataset[0]).indexOf(this.props.y_axis1);
    const yInd2 = (this.props.dataset[0]).indexOf(this.props.y_axis2);
    // iterate through dataset to find and index correct data
    // if two y-axes
    if (yInd2) {
      for (let i = 1; i < this.props.dataset.length; i++) {
        let x = this.numberOrString(this.props.dataset[i][xInd]);
        let y1 = this.numberOrString(this.props.dataset[i][yInd1]);
        let y2 = this.numberOrString(this.props.dataset[i][yInd2]);
        data.push({
          [this.props.x_axis]: x,
          [this.props.y_axis1]: y1,
          [this.props.y_axis2]: y2
        });
      }
    // if only one y axis
    } else {
      for (let i = 1; i < this.props.dataset.length; i++) {
        let x = this.numberOrString(this.props.dataset[i][xInd]);
        let y = this.numberOrString(this.props.dataset[i][yInd1]);
        data.push({
          [this.props.x_axis]: x,
          [this.props.y_axis1]: y
        });
      }
    }

    // determine how to order data
    switch (this.props.chart_sort) {
      case 'x-desc':
        return data.sort( (a, b) => (
          a[this.props.x_axis] < b[this.props.x_axis]
        ));
      case 'x-asc':
        return data.sort( (a, b) => (
          a[this.props.x_axis] > b[this.props.x_axis]
        ));
      case 'y-desc':
        return data.sort( (a, b) => (
          a[this.props.y_axis1] < b[this.props.y_axis1]
        ));
      case 'y-asc':
        return data.sort( (a, b) => (
          a[this.props.y_axis1] > b[this.props.y_axis1]
        ));
    }
    return data;
  }


  lineChart() {
    if (this.props.y_axis2) {
      return(
        <ResponsiveContainer width="100%" height="90%">
          <LineChart width={600} height={300} data={this.parseData()}>
            <XAxis dataKey={this.props.x_axis} name={this.props.x_axis} label={this.props.x_axis} />
            <YAxis dataKey={this.props.y_axis1} name={this.props.y_axis1}/>
            <CartesianGrid stroke='#BDBDBD' strokeDasharray='5 5'/>
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey={this.props.y_axis1} stroke='#00796B'/>
            <Line type='monotone' dataKey={this.props.y_axis2} stroke='#B2DFDB'/>
          </LineChart>
        </ResponsiveContainer>
      );
    } else {
      return(
        <ResponsiveContainer width="100%" height="90%">
          <LineChart width={600} height={300} data={this.parseData()}>
            <XAxis dataKey={this.props.x_axis} name={this.props.x_axis} label={this.props.x_axis} />
            <YAxis dataKey={this.props.y_axis1} name={this.props.y_axis1}/>
            <CartesianGrid stroke='#BDBDBD' strokeDasharray='5 5'/>
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey={this.props.y_axis1} stroke='#009688'/>
          </LineChart>
        </ResponsiveContainer>
      );
    }
  }

  circleChart() {
      return(
        <ResponsiveContainer width="100%" height="90%">
          <PieChart width={600} height={300} data={this.parseData()}>
            <Pie dataKey={this.props.x_axis} fill='#009688' label/>
          </PieChart>
        </ResponsiveContainer>
      );
  }

  barChart() {
    if (this.props.y_axis2) {
      return(
        <ResponsiveContainer width="100%" height="90%">
          <BarChart width={600} height={300} data={this.parseData()}>
            <XAxis dataKey={this.props.x_axis} />
            <YAxis dataKey={this.props.y_axis1} />
            <CartesianGrid stroke='#BDBDBD' strokeDasharray='5 5'/>
            <Tooltip />
            <Legend />
            <Bar type='monotone' dataKey={this.props.y_axis1} fill='#00796B'/>
            <Bar type='monotone' dataKey={this.props.y_axis2} fill='#B2DFDB'/>
          </BarChart>
        </ResponsiveContainer>
      );
    } else {
      return(
        <ResponsiveContainer width="100%" height="90%">
          <BarChart width={600} height={300} data={this.parseData()}>
            <XAxis dataKey={this.props.x_axis} />
            <YAxis dataKey={this.props.y_axis1} />
            <CartesianGrid stroke='#BDBDBD' strokeDasharray='5 5'/>
            <Tooltip />
            <Legend />
            <Bar type='monotone' dataKey={this.props.y_axis1} fill='#00796B'/>
          </BarChart>
        </ResponsiveContainer>
      );
    }
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
