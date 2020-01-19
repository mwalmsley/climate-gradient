import React, {Component} from 'react';
import Nav from '../components/UI/Nav';

import styles from './Homepage.module.css';

class Result extends Component {
    render() {
        return(
            <div>
                <div className={styles.nav}>
                    <h3>Cool Title</h3>
                    <i class="fas fa-bars"></i>
                </div>
                <div className={styles.b}>
                    <h4>Present</h4>
                    <img src={this.props.images[0]} alt='' />
                    <h4>Future</h4>
                    <img src={this.props.images[1]} alt='' />
                    <h3>Tips to follow</h3>
                    <ol>
                        <li>Tip 1</li>
                        <li>Tip 2</li>
                        <li>Tip 3</li>
                    </ol>
                </div>
            </div>
        );
    }   
}

export default Result;