import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const btn = (props) => {
    return (
        // <Button 
        //     variant="success"
        //     style={{
        //         fontSize: '1.5rem',
        //         height: '6rem',
        //         width: '15rem'
        //     }}
        //     onChange={props.upload}>
        //     {props.name}
        // </Button>
        <div className='buttons fadein'>
            <div className='button'>
                <label htmlFor='single'>
                </label>
            <input type='file' id='single' onChange={props.upload} /> 
            </div>
        </div>
    );
}

export default btn;

