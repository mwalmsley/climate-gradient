import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

// import Welcomepage from './containers/Welcomepage';
 import Homepage from './containers/Homepage';
 import Loadingpage from './containers/Loadingpage';
 import Result from './containers/Result'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Result />
      </BrowserRouter>
    );
  }
}

export default App;
