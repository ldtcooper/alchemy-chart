json.array! @charts do |chart|
  json.id chart.id
  json.name chart.name
  json.chart_type chart.chart_type
  json.creator chart.owner.username
end
