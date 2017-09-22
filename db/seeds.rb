# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dataset.delete_all

Dataset.create(
  [
    {
      owner_id: 1,
      dataset_name: "Germany's population today and tomorrow",
      data_type: 'json',
      data_text:
      '{
        "total_population": [
            {
                "date": "2017-09-21",
                "population": 80619599
            },
            {
                "date": "2017-09-22",
                "population": 80619409
            }
        ]
      }'
    },
    {
      owner_id: 6,
      dataset_name: "USD exchange rate 9-21-2017",
      data_type: 'json',
      data_text: '{"base":"USD","date":"2017-09-21","rates":{"AUD":1.2601,"BGN":1.6428,"BRL":3.1376,"CAD":1.2358,"CHF":0.97312,"CNY":6.5922,"CZK":21.909,"DKK":6.2501,"GBP":0.7412,"HKD":7.8043,"HRK":6.2854,"HUF":260.91,"IDR":13347.0,"ILS":3.5223,"INR":64.805,"JPY":112.44,"KRW":1133.6,"MXN":17.829,"MYR":4.198,"NOK":7.8139,"NZD":1.3665,"PHP":51.02,"PLN":3.5955,"RON":3.8629,"RUB":57.977,"SEK":7.9912,"SGD":1.3524,"THB":33.13,"TRY":3.5091,"ZAR":13.346,"EUR":0.83998}}'
    }
  ]
)
