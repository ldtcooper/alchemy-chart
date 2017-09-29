User.create!([
  {username: "Demo User", password_digest: "$2a$10$DS.S4hI..GfAvq2mjxCXoOnFOwA.43HbGs8Jepus09c7wfa37XCq6", session_token: "Dett58Pteie3q9i1kmKqKg"}
])

Dataset.create!([
  {owner_id: 1, dataset_name: "Selected Exchange Rates - 9/29/17", data_type: "json", data_text: "[{\"Currency\":\"AUD\",\"USD\":1.2769},{\"Currency\":\"CAD\",\"USD\":1.244},{\"Currency\":\"CHF\",\"USD\":0.97044},{\"Currency\":\"GBP\",\"USD\":0.74689},{\"Currency\":\"HKD\",\"USD\":7.8108},{\"Currency\":\"IDR\",\"USD\":13458},{\"Currency\":\"JPY\",\"USD\":112.5},{\"Currency\":\"MXN\",\"USD\":18.178},{\"Currency\":\"NZD\",\"USD\":1.3852},{\"Currency\":\"PLN\",\"USD\":3.6458},{\"Currency\":\"RUB\",\"USD\":57.811},{\"Currency\":\"ZAR\",\"USD\":13.505},{\"Currency\":\"EUR\",\"USD\":0.84703}]"},
  {owner_id: 1, dataset_name: "USD-EUR Exchange Rates 2012-2017", data_type: "csv", data_text: "[[\"DATE\",\"EXUSEU\"],[\"2012-09-01\",\"1.2885\"],[\"2012-10-01\",\"1.2974\"],[\"2012-11-01\",\"1.2837\"],[\"2012-12-01\",\"1.3119\"],[\"2013-01-01\",\"1.3304\"],[\"2013-02-01\",\"1.3347\"],[\"2013-03-01\",\"1.2953\"],[\"2013-04-01\",\"1.3025\"],[\"2013-05-01\",\"1.2983\"],[\"2013-06-01\",\"1.3197\"],[\"2013-07-01\",\"1.3088\"],[\"2013-08-01\",\"1.3314\"],[\"2013-09-01\",\"1.3364\"],[\"2013-10-01\",\"1.3646\"],[\"2013-11-01\",\"1.3491\"],[\"2013-12-01\",\"1.3708\"],[\"2014-01-01\",\"1.3618\"],[\"2014-02-01\",\"1.3665\"],[\"2014-03-01\",\"1.3828\"],[\"2014-04-01\",\"1.3810\"],[\"2014-05-01\",\"1.3739\"],[\"2014-06-01\",\"1.3595\"],[\"2014-07-01\",\"1.3533\"],[\"2014-08-01\",\"1.3315\"],[\"2014-09-01\",\"1.2889\"],[\"2014-10-01\",\"1.2677\"],[\"2014-11-01\",\"1.2473\"],[\"2014-12-01\",\"1.2329\"],[\"2015-01-01\",\"1.1615\"],[\"2015-02-01\",\"1.1350\"],[\"2015-03-01\",\"1.0819\"],[\"2015-04-01\",\"1.0822\"],[\"2015-05-01\",\"1.1167\"],[\"2015-06-01\",\"1.1226\"],[\"2015-07-01\",\"1.0997\"],[\"2015-08-01\",\"1.1136\"],[\"2015-09-01\",\"1.1229\"],[\"2015-10-01\",\"1.1228\"],[\"2015-11-01\",\"1.0727\"],[\"2015-12-01\",\"1.0889\"],[\"2016-01-01\",\"1.0855\"],[\"2016-02-01\",\"1.1092\"],[\"2016-03-01\",\"1.1134\"],[\"2016-04-01\",\"1.1346\"],[\"2016-05-01\",\"1.1312\"],[\"2016-06-01\",\"1.1232\"],[\"2016-07-01\",\"1.1055\"],[\"2016-08-01\",\"1.1207\"],[\"2016-09-01\",\"1.1218\"],[\"2016-10-01\",\"1.1014\"],[\"2016-11-01\",\"1.0792\"],[\"2016-12-01\",\"1.0545\"],[\"2017-01-01\",\"1.0635\"],[\"2017-02-01\",\"1.0650\"],[\"2017-03-01\",\"1.0691\"],[\"2017-04-01\",\"1.0714\"],[\"2017-05-01\",\"1.1050\"],[\"2017-06-01\",\"1.1233\"],[\"2017-07-01\",\"1.153\"],[\"2017-08-01\",\"1.1813\"],[\"2017-09-01\",\"1.1954\"],[\"\"]]"},
  {owner_id: 1, dataset_name: "Sample Test Scores", data_type: "json", data_text: "[{\"Student Name\":\"Alice\",\"Math\":64,\"English\":86,\"Science\":91,\"History\":74},{\"Student Name\":\"Bob\",\"Math\":62,\"English\":25,\"Science\":82,\"History\":36},{\"Student Name\":\"Charles\",\"Math\":31,\"English\":90,\"Science\":44,\"History\":85},{\"Student Name\":\"Dawn\",\"Math\":61,\"English\":77,\"Science\":26,\"History\":63},{\"Student Name\":\"Elvis\",\"Math\":34,\"English\":87,\"Science\":93,\"History\":78},{\"Student Name\":\"Francisca\",\"Math\":89,\"English\":80,\"Science\":45,\"History\":17},{\"Student Name\":\"Geraldo\",\"Math\":77,\"English\":66,\"Science\":55,\"History\":44},{\"Student Name\":\"Hannah\",\"Math\":66,\"English\":53,\"Science\":89,\"History\":43},{\"Student Name\":\"Ibrihim\",\"Math\":67,\"English\":34,\"Science\":51,\"History\":85},{\"Student Name\":\"Jason\",\"Math\":74,\"English\":84,\"Science\":12,\"History\":68}]"},
  {owner_id: 1, dataset_name: "Shanghai and Singapore Port Volumes", data_type: "tsv", data_text: "[[\"Year\",\"Shanghai\",\"Singapore\"],[\"2015\",\"36,516\",\"30,922\"],[\"2014\",\"35,268\",\"33,869\"],[\"2013\",\"33,617\",\"32,240\"],[\"2012\",\"32,529\",\"31,649\"],[\"2011\",\"31,700\",\"29,937\"],[\"2010\",\"29,069\",\"28,431\"],[\"2009\",\"25,002\",\"25,866\"],[\"2008\",\"27,980\",\"29,918\"],[\"2007\",\"26,150\",\"27,932\"],[\"2006\",\"21,710\",\"24,792\"],[\"2005\",\"18,084\",\"23,192\"],[\"2004\",\"14,557\",\"21,329\"]]"},
  {owner_id: 1, dataset_name: "Apple and Microsoft Stock Prices in 2008", data_type: "tsv", data_text: "[[\"Date\",\"AAPL\",\"MSFT\"],[\"2008-01-01\",\"28.608572\",\"35.959999\"],[\"2008-01-08\",\"26.065714\",\"34.709999\"],[\"2008-01-15\",\"25.602858\",\"34.380001\"],[\"2008-01-22\",\"22.854286\",\"35\"],[\"2008-01-29\",\"19.521429\",\"33.25\"],[\"2008-02-05\",\"19.142857\",\"29.940001\"],[\"2008-02-12\",\"18.714285\",\"29.049999\"],[\"2008-02-19\",\"18.107143\",\"28.959999\"],[\"2008-02-26\",\"18.885714\",\"28.860001\"],[\"2008-03-04\",\"18.214285\",\"28.41\"],[\"2008-03-11\",\"18.614286\",\"29.49\"],[\"2008-03-18\",\"20.121429\",\"29.59\"],[\"2008-03-25\",\"20.82\",\"29.370001\"],[\"2008-04-01\",\"22.812857\",\"29.59\"],[\"2008-04-08\",\"22.35\",\"29.4\"],[\"2008-04-15\",\"24.071428\",\"30.6\"],[\"2008-04-22\",\"24.821428\",\"32.099998\"],[\"2008-04-29\",\"26.472857\",\"30.23\"],[\"2008-05-06\",\"26.981428\",\"30.139999\"],[\"2008-05-13\",\"27.462856\",\"30.530001\"],[\"2008-05-20\",\"26.85\",\"29.309999\"],[\"2008-05-27\",\"27.092857\",\"28.700001\"],[\"2008-06-03\",\"27.135714\",\"28.309999\"],[\"2008-06-10\",\"26.682858\",\"29.57\"],[\"2008-06-17\",\"26.048571\",\"29.190001\"],[\"2008-06-24\",\"25.547142\",\"28.67\"],[\"2008-07-01\",\"25.35\",\"27.379999\"],[\"2008-07-08\",\"25.844286\",\"26.200001\"],[\"2008-07-15\",\"24.997143\",\"27.91\"],[\"2008-07-22\",\"24.052856\",\"26.84\"],[\"2008-07-29\",\"23.171429\",\"26.49\"],[\"2008-08-05\",\"25.214285\",\"28.4\"],[\"2008-08-12\",\"25.778572\",\"28.5\"],[\"2008-08-19\",\"25.357143\",\"27.879999\"],[\"2008-08-26\",\"25.178572\",\"28.01\"],[\"2008-09-02\",\"24.785715\",\"27.76\"],[\"2008-09-09\",\"22.851429\",\"27.74\"],[\"2008-09-16\",\"20.6\",\"26.49\"],[\"2008-09-23\",\"19.4\",\"27.66\"],[\"2008-09-30\",\"16.428572\",\"27.469999\"],[\"2008-10-07\",\"15.79\",\"25.5\"],[\"2008-10-14\",\"16.628571\",\"25.73\"],[\"2008-10-21\",\"14.464286\",\"25.01\"],[\"2008-10-28\",\"16.027143\",\"23.969999\"],[\"2008-11-04\",\"15.97\",\"23.66\"],[\"2008-11-11\",\"13.881429\",\"21.34\"],[\"2008-11-18\",\"13.541429\",\"20.940001\"],[\"2008-11-25\",\"13.607142\",\"20.93\"],[\"2008-12-02\",\"14.4\",\"21.25\"],[\"2008-12-09\",\"14.8\",\"21.25\"],[\"2008-12-16\",\"13.782857\",\"20.18\"],[\"2008-12-23\",\"12.552857\",\"19.57\"],[\"2008-12-30\",\"12.578571\",\"19.68\"]]"},
  {owner_id: 1, dataset_name: "2017 German Election Results", data_type: "tsv", data_text: "[[\"Party\",\"Constituency Votes\",\"Constituency Seats\",\"Party List Votes\",\"Party List Seats\",\"Total Seats\"],[\"Christian Democratic Union (CDU)[a]\",\"14,027,804\",\"185\",\"12,445,832\",\"15\",\"200\"],[\"Social Democratic Party (SPD)\",\"11,426,613\",\"59\",\"9,538,367\",\"94\",\"153\"],[\"Alternative for Germany (AfD)[b]\",\"5,316,095\",\"3\",\"5,877,094\",\"91\",\"94\"],[\"Free Democratic Party (FDP)\",\"3,248,745\",\"0\",\"4,997,178\",\"80\",\"80\"],[\"The Left (DIE LINKE)\",\"3,966,035\",\"5\",\"4,296,762\",\"64\",\"69\"],[\"Alliance 90/The Greens (GRÜNE)\",\"3,717,436\",\"1\",\"4,157,564\",\"66\",\"67\"],[\"Christian Social Union in Bavaria (CSU)[a]\",\"3,255,604\",\"46\",\"2,869,744\",\"0\",\"46\"]]"}
])

Chart.create!([
  {owner_id: 1, dataset_id: 5, chart_type: "area", chart_sort: "x-asc", x_axis: "Year", y_axis1: "Shanghai", y_axis2: "Singapore", name: "Shanghai and Singapore Shipping Volumes"},
  {owner_id: 1, dataset_id: 6, chart_type: "line", chart_sort: "x-asc", x_axis: "Date", y_axis1: "AAPL", y_axis2: "MSFT", name: "Apple vs Microsoft 2008"},
  {owner_id: 1, dataset_id: 3, chart_type: "line", chart_sort: "x-asc", x_axis: "DATE", y_axis1: "EXUSEU", y_axis2: "", name: "USD-EUR Rates 2012-2017"},
  {owner_id: 1, dataset_id: 4, chart_type: "bar", chart_sort: "x-asc", x_axis: "Student Name", y_axis1: "Math", y_axis2: "English", name: "Test Scores - Math and English"},
  {owner_id: 1, dataset_id: 7, chart_type: "circle", chart_sort: "y-desc", x_axis: "Party", y_axis1: "Total Seats", y_axis2: "", name: "Seats in the Bundestag"},
  {owner_id: 1, dataset_id: 4, chart_type: "scatter", chart_sort: "x-asc", x_axis: "Math", y_axis1: "Science", y_axis2: "", name: "Math and Science Scores"}
])
