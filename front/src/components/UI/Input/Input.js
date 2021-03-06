import React from 'react';

const input = props => {
    let inputElement = null;
    switch(props.elementType) {
        case('input'):
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        default:
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed} />;
    }
    return(
        <div style={{display: 'flex', flexDirection: 'column', padding: '1rem' }}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;