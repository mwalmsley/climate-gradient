import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

// import Welcomepage from './containers/Welcomepage';
 import Homepage from './containers/Homepage';
 import Result from './containers/Result'
 import Loadingpage from './containers/Loadingpage'

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      uploading: false,
      images: []
    }

    this.onChange = this.onChange.bind(this)
  }


  onChange(e) {

    const server_ip = 'http://35.224.220.162:5000'
        
    const files = Array.from(e.target.files)
    this.setState({ uploading: true })

    const formData = new FormData()

    files.forEach((file, i) => {
        console.log(file.height)
        formData.append(i, file)  // will be only one
    })
    formData.append('image_height', 28)
    formData.append('image_width', 28)

    fetch(server_ip + `/results`, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(images => {
      this.setState({
        uploading: false,
        images: [server_ip + '/' + images['input_image'], server_ip + '/' + images['styled_image']]
      })
    }
    )
  }
  
  render() {
    if (this.state.images.length > 0) {
      // this.setState({uploading: false})
      // return <Homepage upload={this.onChange}></Homepage>
      return <Result images={this.state.images}></Result>
    }
    else if (this.state.uploading) {
      return <Loadingpage></Loadingpage>
    }
    else {
      return <Homepage upload={this.onChange}></Homepage>
    }
  }

}

export default App;
