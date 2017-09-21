json.array! @datasets do |comment|
  json.id comment.id
  json.name comment.dataset_name
  json.type comment.data_type
end
