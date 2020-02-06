import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { selectedFile: null }

  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  }

  fileSubmitHandler = () => {
    const fd = new FormData();
    fd.append('file', this.state.selectedFile, this.state.selectedFile.name, {
      onUploadProgress: ProgressEvent => {
        console.log( `Upload Progress: ${Math.round( ProgressEvent.loaded / ProgressEvent.total * 100 )}` );
      }
    });

    // axios.post('http://localhost:3001/api/space/upload', fd)
    //   .then(res => console.log('res', res));

      fetch('http://localhost:3001/api/space/upload', {
      method: 'post',
      // headers: {
      //   "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      // },
      body: fd
    })
    .then(res => res.json())
    .then(data => console.log('data', data))
    .catch(err => console.log('ERR: ', err));

  }

  render() {
    return (
      <div className="App">
        <input
          type="file"
          style={{display: 'none'}}
          onChange={this.fileSelectedHandler}
          ref={fileInput => this.fileInput = fileInput} />
        <button onClick={() => this.fileInput.click()}>Select</button>
        <button onClick={this.fileSubmitHandler}>Upload</button>
      </div>
    );
  }
}

export default App;
