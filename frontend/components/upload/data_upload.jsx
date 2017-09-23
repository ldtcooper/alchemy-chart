import React from 'react';
import Dropzone from 'react-dropzone';

class DataUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      files: [],
      name: "",
      message: "Drop your file here, or click to select file to upload.(CSV, TSV, and JSON files only)"
      };
  }

  handleDrop(files) {
    this.setState({
      disabled: true,
      files,
      message: 
    });
  }

  render() {
    return (
      <div>
        <h2>Upload Data</h2>
        <div className='dropzone'>
          <Dropzone
            onDrop={this.handleDrop.bind(this)}
            disabled={this.state.disabled}
            >
            <p>{this.state.message}</p>
          </Dropzone>

        </div>
      </div>
    );
  }

}

export default DataUpload;
