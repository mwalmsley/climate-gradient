import React, {Component} from 'react';
import Btn from './UI/Button';

class UploadImage extends Component{

    render() {
        return (
            <div 
                style={{
                    paddingBottom: '2rem'
                }}
            >
                <Btn 
                    name="Upload"
                     />
            </div>
        );
    }
}

export default UploadImage;