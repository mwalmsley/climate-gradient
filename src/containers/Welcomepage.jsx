import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import styles from './Homepage.module.css';

class Welcome extends Component {
    render() {
        return(
        <BrowserRouter>
            <div>
                <a href='./Homepage'>WELCOME</a>
            </div>
        </BrowserRouter>
        );
    }
}

export default Welcome;