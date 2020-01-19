import React, {Component} from 'react';
import Nav from '../components/UI/Nav';

import styles from './Homepage.module.css';

class Homepage extends Component {
    render() {
        return(
            <div>
                <div className={styles.nav}>
                    <i class="fas fa-bars"></i>
                </div>
                <div className={styles.b}>
                    <div className={styles.image}></div>
                    <h4>Present</h4>
                    <div className={styles.image}></div>
                    <h4>Future</h4>
                    <h3>Tips to follow</h3>
                    <ol>
                        <li>Tip 1</li>
                        <li>Tip 2</li>
                        <li>Tip 3</li>
                    </ol>
                    <div className={styles.image}></div>
                </div>
            </div>
        );
    }   
}

export default Homepage;