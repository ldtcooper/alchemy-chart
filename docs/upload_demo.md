## Dropzone Event Handler

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
