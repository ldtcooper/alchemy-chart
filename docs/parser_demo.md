# Parser Code

## Parser

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

## RegExp number finder

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
