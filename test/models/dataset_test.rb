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

require 'test_helper'

class DatasetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
