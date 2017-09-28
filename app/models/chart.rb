# == Schema Information
#
# Table name: charts
#
#  id         :integer          not null, primary key
#  owner_id   :integer          not null
#  dataset_id :integer          not null
#  chart_type :string           not null
#  chart_sort :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  x_axis     :string           not null
#  y_axis1    :string           not null
#  y_axis2    :string
#  name       :string           not null
#

class Chart < ApplicationRecord
  validates :owner_id, :dataset_id, :x_axis, :y_axis1, presence: true
  validates :chart_type, presence: true, inclusion: { in: ['circle', 'bar', 'line', 'scatter', 'area']}
  validates :chart_sort, presence: true, inclusion: { in: ['y-asc', 'y-desc', 'x-asc', 'x-desc']}
  validates :name, presence: true, uniqueness: {scope: :owner_id}

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

  belongs_to :dataset,
  primary_key: :id,
  foreign_key: :dataset_id,
  class_name: :Dataset

  has_many :shares,
  primary_key: :id,
  foreign_key: :chart_id,
  class_name: :Share

end
