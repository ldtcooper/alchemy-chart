class Dataset < ApplicationRecord
  validates :owner_id, :data_text, presence: true
  validates :dataset_name, presence: true, unique: {scope: :owner_id}
  validates :data_type, presence: true, inclusion: { in: ['tsv', 'csv', 'json'] }

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User
end
