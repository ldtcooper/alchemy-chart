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
#

class Chart < ApplicationRecord
  validates :owner_id, :dataset_id, presence: true
  validates :chart_type, presence: true, inclusion: { in: ['circle', 'bar', 'line', 'plot']}
  validates :chart_sort, presence: true, inclusion: { in: ['y-asc', 'y-desc', 'x-asc', 'x-desc']}


end
