import React, {Component} from 'react';
import UploadImage from '../components/UploadImage';
import Location from '../components/Location';
import Nav from '../components/UI/Nav';

import styles from './Homepage.module.css';

class Homepage extends Component {
    render() {
        return(
            <div>
                <Nav />
                <div>
                    <div className={styles.upperdiv}>
                        <div className={styles.gifStyle}></div>
                    </div>
                    <div className={styles.lowerdiv}>
                        <UploadImage />
                        <Location />
                    </div>
                </div>
            </div>
        );
    }   
}

export default Homepage;