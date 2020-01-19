import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const btn = (props) => {
    return (
        <Button 
            variant="success"
            style={{
                fontSize: '1.5rem',
                height: '6rem',
                width: '15rem'
            }}
            onClick={props.click}>
            {props.name}
        </Button>
    );
}

export default btn;