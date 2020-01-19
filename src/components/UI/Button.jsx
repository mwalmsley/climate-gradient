import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const btn = (props) => {
    return (
        // <Button 
        //     variant="success"
  
        //     onChange={props.upload}>
        //     {props.name}
        // </Button>
        <form>
            <div class="form-group">
                <label htmlFor='single'>{props.name}</label>
                <br></br>
                <input className='btn fadein button' type='file' id='single' onChange={props.upload}  /> 
            </div>
        </form>
    );
}

export default btn;

