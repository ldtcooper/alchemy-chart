# == Schema Information
#
# Table name: datasets
#
#  id           :integer          not null, primary key
#  owner_id     :integer          not null
#  dataset_name :string           not null
#  data_type    :string           not null
#  data_text    :jsonb            not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Dataset < ApplicationRecord
  validates :owner_id, :data_text, presence: true
  validates :dataset_name, presence: true, uniqueness: {scope: :owner_id}
  validates :data_type, presence: true, inclusion: { in: ['tsv', 'csv', 'json'] }

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

  has_many :charts,
  primary_key: :id,
  foreign_key: :dataset_id,
  class_name: :Chart
end
