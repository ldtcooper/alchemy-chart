json.array! @charts do |chart|
  json.id chart.idea
  json.name chart.name
  json.chart_type chart.chart_type
  json.creator chart.owner.name
end
