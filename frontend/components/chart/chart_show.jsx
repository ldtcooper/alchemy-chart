import React from 'react';
import ChartMaker from './new_chart_creator';

class ChartShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getCurrentChart(this.props.match.params.id);
  }

  render() {
    let chartProps;
    if (this.props.currentChart.data) {
      chartProps = {
        dataset: JSON.parse(this.props.currentChart.data),
        x_axis: this.props.currentChart.x_axis,
        y_axis1: this.props.currentChart.y_axis1,
        y_axis2: this.props.currentChart.y_axis2,
        chart_sort: this.props.currentChart.chart_sort,
        chart_type: this.props.currentChart.chart_type
      };
    }
    return (
      <div className='chart-view'>
        <h2>{this.props.currentChart.name}</h2>
        <ChartMaker {...chartProps}/>
      </div>
    );
  }
}

export default ChartShow;
