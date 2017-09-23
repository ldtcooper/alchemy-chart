import React from 'react';
import Dropzone from 'react-dropzone';

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
      message: "Drop your file here, or click to select file to upload.(CSV, TSV, and JSON files only)"
      };
  }

  componentDidMount() {
    this.fileReader = new FileReader();
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

    if (file.size > 20000) {
      this.setState({errors: ["Files must be under 20 kB in size."]});
    } else if (!acceptedTypes.include(file.type)) {
      this.setState({errors: ["Files must be CSV, TSV, or JSON"]});
    }
    else {
      this.setState({errors: [], message: `${file.name}`}, dataType);
      this.fileReader.onload = (e) => {
        // parse file
      };
    }
  }

  render() {
    return (
      <div>
        <h2>Upload Data</h2>
        <div className='dropzone'>
          <Dropzone
            onDrop={this.handleDrop.bind(this)}
            disabled={this.state.disabled}
            accept="application/json,text/csv,text/tab-separated-values"
            >
            <p>{this.state.message}</p>
          </Dropzone>

        </div>
      </div>
    );
  }

}

export default DataUpload;
