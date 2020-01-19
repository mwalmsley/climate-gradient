import React, {Component} from 'react';
import Nav from '../components/UI/Nav';
import {Route} from 'react-router-dom';

import Image from '../components/UI/seasons.gif';
import styles from './Homepage.module.css';
import UploadImage from '../components/UploadImage';
import Location from '../components/Location';

class Homepage extends Component {
    render() {
        return(
            <div>
                <div className={styles.nav}>
                    <h3 className={styles.navtext}>Climate Gradient</h3>
                </div>
                <div className={styles.b}>
                    <div className={styles.upperdiv}>
                        <img src={Image} className={styles.gifStyle} />
                    </div>
                    <div className={styles.lowerdiv}>
                        <UploadImage
                            upload={this.props.upload}
                            name='Select Image'
                        />
                    </div>
                </div>
         </div>
        );
    }   
}

export default Homepage;