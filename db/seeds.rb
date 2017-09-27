# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dataset.delete_all

demo_user = User.find_by(username: 'Alchemy Chart Demo User')

Dataset.create(
  [
    {
      owner_id: demo_user.id,
      dataset_name: "USD exchange rate 9-21-2017",
      data_type: 'json',
      data_text: '{"base":"USD","date":"2017-09-21","rates":{"AUD":1.2601,"BGN":1.6428,"BRL":3.1376,"CAD":1.2358,"CHF":0.97312,"CNY":6.5922,"CZK":21.909,"DKK":6.2501,"GBP":0.7412,"HKD":7.8043,"HRK":6.2854,"HUF":260.91,"IDR":13347.0,"ILS":3.5223,"INR":64.805,"JPY":112.44,"KRW":1133.6,"MXN":17.829,"MYR":4.198,"NOK":7.8139,"NZD":1.3665,"PHP":51.02,"PLN":3.5955,"RON":3.8629,"RUB":57.977,"SEK":7.9912,"SGD":1.3524,"THB":33.13,"TRY":3.5091,"ZAR":13.346,"EUR":0.83998}}'
    },
    {
      owner_id: demo_user.id,
      dataset_name: "GBP exchange rate 9-22-2017",
      data_type: 'json',
      data_text: '{"base":"GBP","date":"2017-09-22","rates":{"AUD":1.7028,"BGN":2.2186,"BRL":4.2492,"CAD":1.6647,"CHF":1.3145,"CNY":8.9394,"CZK":29.546,"DKK":8.4405,"HKD":10.597,"HRK":8.4899,"HUF":351.35,"IDR":18045.0,"ILS":4.7365,"INR":87.914,"JPY":152.02,"KRW":1534.6,"MXN":24.151,"MYR":5.6851,"NOK":10.571,"NZD":1.8531,"PHP":68.665,"PLN":4.8406,"RON":5.2143,"RUB":78.144,"SEK":10.817,"SGD":1.8255,"THB":44.897,"TRY":4.7421,"USD":1.3568,"ZAR":17.964,"EUR":1.1344}}'
    }
  ]
)
