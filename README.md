# README

Alchemy Chart is a data visualization app inspired by Charto. It allows you to upload data in several data formats, make a variety of charts from that data, and then share those charts with other users. You can find Alchemy Chart [here](alchemychart.herokuapp.com).

# ![Charts Show](https://raw.githubusercontent.com/ldtcooper/alchemy-chart/master/docs/line_graph.png)
An example of a line graph built with Alchemy Chart

## Features
  * Upload data in JSON, CSV, or TSV formats.
  * Create line, bar, area, pie, and scatter charts.
  * Save charts and data for later use.
  * Share charts with other users.

## Design
  Alchemy Charts was brought from [wireframes](https://github.com/ldtcooper/alchemy-chart/wiki/Wireframes) to wired up in about two weeks.
  Its backend is built with Ruby on Rails on a PostgreSQL database, while the frontend is React and Redux with visual design inspired by Google's [Material Design](https://material.io/guidelines/).

  The charts were built with a library called [Recharts](http://recharts.org/) which fuses the powerful data visualization capabilities of D3 with React's modularity.

  The routing was done with [React Router v4.2.0](https://github.com/ReactTraining/react-router).

  # ![Charts Show](https://raw.githubusercontent.com/ldtcooper/alchemy-chart/master/docs/charts_view.png)
  Alchemy Chart's chart show page


## Highlights
### Parsing Function
  Because Alchemy Chart accepts several different forms of data, it had to be parsed to be of any use to Recharts, which can only accept data in one specific format -- an array of JavaScript objects. JSON data was easy, because it can be uploaded that way. TSV and CSV files however posed more of a challenge. On upload, they were parsed into JSON, but the parser I used ([Papa Parse](http://papaparse.com/)) outputs CSV and TSV files as JSON arrays of arrays with the first array containing the column headers.
  In more concrete terms, I had something looking like this:
  ```javascript
  [["year", "revenue"], ["2015", "50000"], ["2016", "65000"], ["2017", "42000"]]
  ```
  And needed something like this:
  ```javascript
  [{"year": 2015, "revenue": 50000}, {"year": 2016, "revenue": 65000}, {"year": 2017, "revenue": 42000}]
  ```

  With that in mind, I wrote the following function to take in parsed JSON strings:

  ```javascript
  let data;
  if (Array.isArray(this.props.dataset[0])) {
    //find the indicies that match the headers
    data = [];
    const xInd = (this.props.dataset[0]).indexOf(this.props.x_axis);
    const yInd1 = (this.props.dataset[0]).indexOf(this.props.y_axis1);
    const yInd2 = (this.props.dataset[0]).indexOf(this.props.y_axis2);
    // iterate through dataset to find and index correct data
    // if two y-axes
    if (yInd2) {
      for (let i = 1; i < this.props.dataset.length; i++) {
        let x = this.numberOrString(this.props.dataset[i][xInd]);
        let y1 = this.numberOrString(this.props.dataset[i][yInd1]);
        let y2 = this.numberOrString(this.props.dataset[i][yInd2]);
        data.push({
          [this.props.x_axis]: x,
          [this.props.y_axis1]: y1,
          [this.props.y_axis2]: y2
        });
      }
    // if only one y axis
    } else {
      for (let i = 1; i < this.props.dataset.length; i++) {
        let x = this.numberOrString(this.props.dataset[i][xInd]);
        let y = this.numberOrString(this.props.dataset[i][yInd1]);
        data.push({
          [this.props.x_axis]: x,
          [this.props.y_axis1]: y
        });
      }
    }
  } else {
    data = this.props.dataset;
  }
  ```

  This function loops through arrays of arrays and formats them into an array of objects according to the x- and y-axes selected by the user. This raised another problem though: all of my numbers were being passed in as strings. I solved that problem with the numberOrString method (see below) which uses regular expressions to check if a piece of data is a string with letters, which it will leave alone; a string of digits, in which case it will turn it into an integer; a string of commas and numbers, which it will turn into an integer without commas; or a string of numbers with a period, which it will turn into a float.

  ```javascript
  numberOrString(str) {
    // tests if the strings from the dataset are numbers in disguise
    if (/^[0-9]*$/.test(str)) {
      return parseInt(str, 10);
    // tests if they are number strings with commas
    } else if (/\d*\,\d*/.test(str)) {
        let newStr = str.replace(/,/g, '');
        return parseInt(newStr, 10);
    } else if (/\d*\.\d*/.test(str)) {
        return parseFloat(str, 10);
    } else {
        return str;
    }
  }
  ```

  With more time, I would have liked to have moved a lot of this work to the backend, but it is what it is.

### Data Upload
  The data upload UI was built with [Dropzone](https://github.com/react-dropzone/react-dropzone), which allows users to upload data either by dragging and dropping files, or by browsing their computer.

  # ![Charts Show](https://raw.githubusercontent.com/ldtcooper/alchemy-chart/master/docs/upload_page.png)

  This required a unique event handler which would only allow one file of the accepted formats to be uploaded at once. It also needed to enforce a size constraint on the uploaded data (20kB in this case -- admittedly very small, but large enough to get the idea across).

  ```javascript
  handleDrop(files) {
    const file = files[0]; //only allows one file to be uploaded at a time.
    const acceptedTypes = ['application/json', 'text/csv', 'text/tab-separated-values'];
    const dataType = this.fileType(file);
    if (file.size > 20000) {
      this.setState({errors: ["Files must be under 20 kB in size."]});
    } else if (!acceptedTypes.includes(file.type)) {
      this.setState({errors: ["Files must be CSV, TSV, or JSON"]});
    }
    else {
      this.setState({errors: [], message: `${file.name}`, dataType});
      this.fileReader.onload = (e) => {
        this.fileParse(e.target.result);
      };
      this.fileReader.readAsText(file);
    }
  }
  ```

  The `onload` portion simply takes the file, passes it to a function that parses it from CSV/TSV (if needed) and sends it to the backend.

## Future Additions
  * Move more of the parsing to the backend.
  * Add the ability to look at data tables without loading them into graphs.
  * Make graphing more resilient to varying formats.
  * More graphs!



## Attributions
  * Share and Delete icons from Google's [Material Icons](https://material.io/icons/) pack
  * [Dropzone](https://github.com/react-dropzone/react-dropzone) used for data import UI.
  * Seed data taken from The Federal Reserve, Yahoo Finance, Wikipedia, and The World Bank.
