import React from 'react';
import Dropzone from 'react-dropzone';
import * as Papa from 'papaparse';

class DataUpload extends React.Component {
  constructor(props) {
    super(props);

    if (this.errors === undefined) {
      this.errors = [];
    }

    this.state = {
      disabled: false,
      name: "",
      dataType: "",
      dataset: [],
      errors: this.errors,
      message: "Drop your file here, or click to select file to upload (CSV, TSV, and JSON files only)"
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fileReader = new FileReader();
  }

  componentWillReceiveProps(newProps) {
    if(newProps.errors && newProps.errors !== this.state.errors) {
      this.setState({errors: newProps.errors});
    }
  }

  fileType(file) {
    switch (file.type) {
      case 'application/json':
        return 'json';
      case 'text/csv':
        return 'csv';
      case 'text/tab-separated-values':
        return 'tsv';
    }
  }

  handleDrop(files) {
    const file = files[0]; //only allows one file to be uploaded at a time.
    const acceptedTypes = ['application/json', 'text/csv', 'text/tab-separated-values'];
    const dataType = this.fileType(file);
    console.log(file);

    if (file.size > 20000) {
      this.setState({errors: ["Files must be under 20 kB in size."]});
    } else if (!acceptedTypes.includes(file.type)) {
      this.setState({errors: ["Files must be CSV, TSV, or JSON"]});
    }
    else {
      this.setState({errors: [], message: `${file.name}`}, dataType);
      this.fileReader.onload = (e) => {
        this.fileParse(e.target.response);
      };
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    this.setState({name: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // dispatch props.addDataset
  }

  fileParse(file) {
    if (this.state.dataType === 'json') {
      console.log(file);
    } else {
      Papa.parse(file, (results) => {
        console.log(results);
      });
    }
  }

  errorShow() {
    let err = this.state.errors.map( (el) => <li>{el}</li>);
    return(
      <ul>
        {err}
      </ul>
    );
  }

  render() {
    return (
      <div className='data-upload'>
        <h2>Upload Data</h2>
        <div className='dropzone'>
          <Dropzone
            onDrop={this.handleDrop.bind(this)}
            disabled={this.state.disabled}
            accept="application/json,text/csv,text/tab-separated-values"
            className='drop-area'
            >
            <p>{this.state.message}</p>
          </Dropzone>
          <form>
            <label>Name:
              <input type="text" value={this.state.name} onChange={this.handleChange}></input>
            </label>
            <button type="submit" name="Upload" >Upload!</button>
          </form>
          {this.errorShow()}
        </div>
      </div>
    );
  }

}

export default DataUpload;
