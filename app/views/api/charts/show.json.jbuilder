json.extract! @chart, :id, :name, :chart_type, :chart_sort, :x_axis, :y_axis1, :y_axis2
json.creator @chart.owner.username
json.data @chart.dataset.data_text
