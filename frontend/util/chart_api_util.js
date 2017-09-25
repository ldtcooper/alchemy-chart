export const fetchCharts = () => (
  $.ajax({
    method: 'GET',
    url: 'api/charts'
  })
);

export const fetchChart = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/charts/${id}`
  })
);

export const createChart = (chart) => (
  $.ajax({
    method: 'POST',
    url: 'api/charts',
    data: {chart: chart}
  })
);

export const deleteChart = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/charts/${id}`
  })
);

// {
//   dataset_id: 15,
//   chart_type: 'bar',
//   chart_sort: 'x-desc',
//   x_axis: 'base',
//   y_axis1: 'rates',
//   name: 'GBP exchange rates'
// }
