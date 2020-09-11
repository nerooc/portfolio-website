import React from 'react';
import './Input.css';

const Input = (props) => {
    let inputElement = null;

    switch (props.inputType) {
        case('input'):
            inputElement = <input onChange={props.changed} className="input" value={props.value} {...props.inputConfig}/>;
            break;

        case('textarea'):
            inputElement = <textarea onChange={props.changed} className="input textarea" value={props.value} {...props.inputConfig}/>;
            break;
        //case ():
        default:
            inputElement = <h1>Sorry you used wrong propname! Try 'input' or 'textarea'.</h1>
    }

    return (
        <>
            {inputElement}
        </>
    )
}

export default Input;