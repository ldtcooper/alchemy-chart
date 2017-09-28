# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dataset.delete_all

demo_user = User.find_by(username: 'Alchemy Chart Demo User')

Dataset.create([{owner_id: demo_user.id,
  dataset_name: "revenue by year",
  data_type: "csv",
  data_text:
   "[[\"Year\",\"Revenue\"],[\"2000\",\"60000\"],[\"2001\",\"35000\"],[\"2002\",\"47000\"],[\"2003\",\"30000\"],[\"2004\",\"19000\"],[\"2005\",\"10000\"],[\"2006\",\"11000\"],[\"2007\",\"4000\"],[\"2008\",\"5000\"],[\"2009\",\"10000\"],[\"2010\",\"13000\"],[\"2011\",\"20000\"],[\"2012\",\"22000\"],[\"2013\",\"39000\"],[\"2014\",\"30000\"],[\"2015\",\"29000\"],[\"2016\",\"34000\"],[\"2017\",\"19000\"]]"},
   ])

#  id           :integer          not null, primary key
#  owner_id     :integer          not null
#  dataset_name :string           not null
#  data_type    :string           not null
#  data_text    :jsonb            not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
