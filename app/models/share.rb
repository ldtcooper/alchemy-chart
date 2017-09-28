# == Schema Information
#
# Table name: shares
#
#  id         :integer          not null, primary key
#  chart_id   :integer          not null
#  sharee_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Share < ApplicationRecord
  validates :chart_id, :sharee_id, presence: true

  belongs_to :chart,
  primary_key: :id,
  foreign_key: :chart_id,
  class_name: :Chart

  belongs_to :user,
  primary_key: :id,
  foreign_key: :sharee_id,
  class_name: :User
end
