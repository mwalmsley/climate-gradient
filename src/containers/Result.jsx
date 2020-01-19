import React, {Component} from 'react';
import Nav from '../components/UI/Nav';

import styles from './Homepage.module.css';

class Result extends Component {


                        
//
//
// 
// 
    render() {
    var quotes = [
        '“The world will not be destroyed by those who do evil, but by those who watch them without doing anything.” — Albert Einstein',
        "“The Earth is a fine place and worth fighting for.” – Ernest Hemingway",
        " “The future will be green or not at all.” – Jonathon Porritt",
        "“We do not inherit the earth from our ancestors. We borrow it from our children.” – Native American Proverb",
        "“We are living on this planet as if we had another one to go to.” – Terri Swearingen"
    ]

        return(
            <div>
                <div className={styles.nav}>
                    <h3>Climate Gradient</h3>
                    <i class="fas fa-bars"></i>
                </div>
                <div className={styles.b}>
                    <h2>What Will Your World Look Like</h2>
                    <h4>Present</h4>
                    <img src={this.props.images[0]} alt='' />
                    <h4>Future</h4>
                    <img src={this.props.images[1]} alt='' />
                    <br></br>
                    <h4>{quotes[Math.floor(Math.random()*quotes.length)]}</h4>
                </div>
            </div>
        );
    }   
}

export default Result;