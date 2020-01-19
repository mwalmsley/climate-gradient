import React, {Component} from 'react';
// import UploadButtons from '../components/UploadButtons'
import Button from './UI/Button'
import {Route, Link} from 'react-router-dom';

function UploadImage (props) {
    console.log(props)
    return (
        <div style={{paddingBottom: '2rem'}}>
            <Button upload={props.upload} name={props.name}></Button>
        </div>
    );
}

export default UploadImage;