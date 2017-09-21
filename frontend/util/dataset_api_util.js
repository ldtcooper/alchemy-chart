export const fetchDatasets = () => (
  $.ajax({
    method: 'GET',
    url: 'api/datasets'
  })
);

export const sendDataset = (set) => (
  $.ajax({
    method: 'POST',
    url: 'api/datasets',
    data: set
  })
);

export const deleteDataset = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/datasets/${id}`
  })
);
