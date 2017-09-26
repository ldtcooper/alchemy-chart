export const fetchDatasets = () => (
  $.ajax({
    method: 'GET',
    url: 'api/datasets'
  })
);

export const fetchDataset = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/datasets/${id}`
  })
);

export const sendDataset = (set) => (
  $.ajax({
    method: 'POST',
    url: 'api/datasets',
    data: {dataset: set}
  })
);

export const deleteDataset = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/datasets/${id}`
  })
);
