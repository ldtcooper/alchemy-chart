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
