import React from 'react';
import {
  LineChart, Line, PieChart, Pie, XAxis , YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, BarChart, Bar, ScatterChart,
  Scatter, AreaChart, Area, Cell
} from 'recharts';

class ChartMaker extends React.Component {
  constructor(props) {
    super(props);
  }

  numberOrString(str) {
    // tests if the strings from the dataset are numbers in disguise
    if (/^[0-9]*$/.test(str)) {
      return parseInt(str, 10);
    // tests if they are number strings with commas
    } else if (/\d*\,\d*/.test(str)) {
        let newStr = str.replace(/,/g, '');
        return parseInt(newStr, 10);
    } else if (/\d*\.\d*/.test(str)) {
        return parseFloat(str, 10);
    } else {
        return str;
    }
  }

  parseData() {
    let data;
    if (Array.isArray(this.props.dataset[0])) {
      //find the indicies that match the headers
      data = [];
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
    } else {
      data = this.props.dataset;
    }

    // determine how to order data
    switch (this.props.chart_sort) {
      case 'x-desc':
        return data.sort( (a, b) => {
          if (a[this.props.x_axis] > b[this.props.x_axis]) {
            return -1;
          } else if (a[this.props.x_axis] < b[this.props.x_axis]) {
            return 1;
          } else {
            return 0;
          }
        });

      case 'x-asc':
        return data.sort( (a, b) => {
          if (a[this.props.x_axis] > b[this.props.x_axis]) {
            return 1;
          } else if (a[this.props.x_axis] < b[this.props.x_axis]) {
            return -1;
          } else {
            return 0;
          }
        });
      case 'y-desc':
      return data.sort( (a, b) => {
        if (a[this.props.y_axis1] > b[this.props.y_axis1]) {
          return -1;
        } else if (a[this.props.y_axis1] < b[this.props.y_axis1]) {
          return 1;
        } else {
          return 0;
        }
      });
      case 'y-asc':
      return data.sort( (a, b) => {
        if (a[this.props.y_axis1] > b[this.props.y_axis1]) {
          return 1;
        } else if (a[this.props.y_axis1] < b[this.props.y_axis1]) {
          return -1;
        } else {
          return 0;
        }
      });
    }
  }

  lineChart() {
    if (this.props.y_axis2) {
      return(
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={this.parseData()} margin={{top: 10, right: 10, left: 10, bottom: 10}}>
            <XAxis  dataKey={this.props.x_axis} name={this.props.x_axis}  />
            <YAxis dataKey={this.props.y_axis1} name={this.props.y_axis1}/>
            <CartesianGrid stroke='#BDBDBD' strokeDasharray='5 5'/>
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey={this.props.y_axis1} stroke='#5472d3'/>
            <Line type='monotone' dataKey={this.props.y_axis2} stroke='#ffc046'/>
          </LineChart>
        </ResponsiveContainer>
      );
    } else {
      return(
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={this.parseData()} margin={{top: 10, right: 10, left: 10, bottom: 10}}>
            <XAxis  dataKey={this.props.x_axis} name={this.props.x_axis}/>
            <YAxis dataKey={this.props.y_axis1} name={this.props.y_axis1}/>
            <CartesianGrid stroke='#BDBDBD' strokeDasharray='5 5'/>
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey={this.props.y_axis1} stroke='#5472d3'/>
          </LineChart>
        </ResponsiveContainer>
      );
    }
  }

  circleChart() {
    const COLORS = ['#0d47a1', '#ffc046', '#5472d3','#002171', '#ff8f00','#8eacbb', '#c56000'];
    let data = this.parseData();
      return(
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{top: 10, right: 10, left: 10, bottom: 10}}>
            <Pie data={data} nameKey={this.props.x_axis} dataKey={this.props.y_axis1} fill="#5472d3">
              {
                data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
              }
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      );
  }

  barChart() {
    if (this.props.y_axis2) {
      return(
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={this.parseData()} margin={{top: 10, right: 10, left: 10, bottom: 10}}>
            <XAxis  dataKey={this.props.x_axis} />
            <YAxis dataKey={this.props.y_axis1} />
            <CartesianGrid stroke='#BDBDBD' strokeDasharray='5 5'/>
            <Tooltip />
            <Legend />
            <Bar type='monotone' dataKey={this.props.y_axis1} fill='#5472d3'/>
            <Bar type='monotone' dataKey={this.props.y_axis2} fill='#ffc046'/>
          </BarChart>
        </ResponsiveContainer>
      );
    } else {
      return(
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={this.parseData()} margin={{top: 10, right: 10, left: 10, bottom: 10}}>
            <XAxis  dataKey={this.props.x_axis} />
            <YAxis dataKey={this.props.y_axis1} />
            <CartesianGrid stroke='#BDBDBD' strokeDasharray='5 5'/>
            <Tooltip />
            <Legend />
            <Bar type='monotone' dataKey={this.props.y_axis1} fill='#5472d3'/>
          </BarChart>
        </ResponsiveContainer>
      );
    }
  }

  scatterPlot() {
    return(
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart data={this.parseData()} margin={{top: 10, right: 10, left: 10, bottom: 10}}>
          <XAxis  dataKey={this.props.x_axis} />
          <YAxis dataKey={this.props.y_axis1} />
          <CartesianGrid stroke='#BDBDBD' strokeDasharray='5 5'/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }}/>
          <Legend />
          <Scatter type='monotone' dataKey={this.props.y_axis1} fill='#5472d3'/>
        </ScatterChart>
      </ResponsiveContainer>
    );
  }

  areaChart() {
    if (this.props.y_axis2) {
      return(
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={this.parseData()} margin={{top: 10, right: 10, left: 10, bottom: 10}}>
            <XAxis  dataKey={this.props.x_axis} />
            <YAxis dataKey={this.props.y_axis1} />
            <CartesianGrid stroke='#BDBDBD' strokeDasharray='5 5'/>
            <Tooltip />
            <Legend />
            <Area type='monotone' dataKey={this.props.y_axis1} fill='#5472d3' stroke='#5472d3'/>
            <Area type='monotone' dataKey={this.props.y_axis2} fill='#ffc046' stroke='#ffc046'/>
          </AreaChart>
        </ResponsiveContainer>
      );
    } else {
      return(
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={this.parseData()} margin={{top: 10, right: 10, left: 10, bottom: 10}}>
            <XAxis  dataKey={this.props.x_axis} />
            <YAxis dataKey={this.props.y_axis1} />
            <CartesianGrid stroke='#BDBDBD' strokeDasharray='5 5'/>
            <Tooltip />
            <Legend />
            <Area type='monotone' dataKey={this.props.y_axis1} fill='#5472d3' stroke='#5472d3'/>
          </AreaChart>
        </ResponsiveContainer>
      );
    }
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
      case "area":
        renderedChart = this.areaChart();
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
