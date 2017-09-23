import React from 'react';
import Dropzone from 'react-dropzone';

class DataUpload {
  constructor(props) {
    super(props);
    this.state = {disabled: false, files: []};
  }

  handleDrop(files) {
    this.setState({
      disabled: true,
      files
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
            <p>Drop your file here, or click to select file to upload.</p>
            <p>(CSV, TSV, and JSON files only)</p>
          </Dropzone>
        </div>
      </div>
    );
  }

}
