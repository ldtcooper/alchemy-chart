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
#

require 'test_helper'

class ChartTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
