import React from 'react';
import ChartListItem from './chart_list_item';

class ChartList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(event) {
    this.props.seeAllCharts();
  }

  errorsShow() {
    this.props.errors.map( (el, ind) => (
      <li key={ind}>{el}</li>
    ));
  }

  render() {
    let { deleteChart } = this.props;
    let errors = this.errorsShow();
    return(
      <div id='list-div'>
        <h2>Charts</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Creator</th>
              <th>Share</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.charts.map ( (el) => {
                return (
                  <ChartListItem
                    key={el.id}
                    chart={el}
                    deleteChart={ deleteChart }
                  />
                );
              })
            }
          </tbody>
        </table>
        {errors}
      </div>
    );
  }
}


export default ChartList;
