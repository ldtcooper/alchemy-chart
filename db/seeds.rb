# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dataset.delete_all
Chart.delete_all

demo_user = User.find_by(username: 'Alchemy Chart Demo User')



#  id           :integer          not null, primary key
#  owner_id     :integer          not null
#  dataset_name :string           not null
#  data_type    :string           not null
#  data_text    :jsonb            not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
