import React, {Component} from 'react';
import UploadImage from '../components/UploadImage';
import {Link} from 'react-router-dom';
import Nav from '../components/UI/Nav';

import EarthImg from '../components/UI/earth.gif';
import styles from './Homepage.module.css';

class Homepage extends Component {
    constructor(){
        super();

    }
    render() {
        return(
            <div className={styles.loadingBody}>
                <img src={EarthImg} className={styles.earthImage} />
                <div className={styles.countdown}>
                    <h2>Loading...</h2>
                </div>
            </div> 
        );
    }   
}

export default Homepage;