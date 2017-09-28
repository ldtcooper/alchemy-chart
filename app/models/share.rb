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
end
