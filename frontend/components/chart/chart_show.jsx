import React from 'react';
import ChartMaker from './new_chart_creator';

class ChartShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCurrentChart(this.props.match.params.id);
    console.log(this.props.currentChart);
  }

  render() {
    const chartProps = {
      dataset: this.props.currentChart.data,
      x_axis: this.props.currentChart.x_axis,
      y_axis1: this.props.currentChart.y_axis1,
      y_axis2: this.props.currentChart.y_axis2,
      chart_sort: this.props.currentChart.chart_sort,
      chart_type: this.props.currentChart.chart_type
    };

    return (
      <div className='chart-view'>
        <h2>{this.props.currentChart.name}</h2>
        <ChartMaker {...chartProps}/>
      </div>
    );
  }
}

export default ChartShow;
