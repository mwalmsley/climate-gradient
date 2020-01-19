import React, {Component} from 'react';
import Btn from './UI/Button';
import {Route, Link} from 'react-router-dom';

class UploadImage extends Component{

    onClickHandler() {
        return(
            <a href="./loading">loading</a>
        )
    }
    render() {
        return (
            <div style={{paddingBottom: '2rem'}}>
                <Btn 
                    name="Upload"
                    click={this.onClickHandler}
                />
                <Route  />
            </div>
        );
    }
}

export default UploadImage;