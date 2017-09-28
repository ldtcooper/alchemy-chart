export const share = (userId, chartId) => {
  return $.ajax({
    method: 'POST',
    url: 'api/shares',
    data: {sharee_id: userId, chart_id: chartId}
  });
};

export const allUsers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};
