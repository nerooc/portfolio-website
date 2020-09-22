import React from 'react';
import './Input.css';

const Input = (props) => {
    let inputElement = null;
    let classesArray = ['input'];

    if(!props.valid && props.touched){
        classesArray.push('invalid');
    }

    if(!props.valid && props.highlighted){
        classesArray.push('invalidHighlight');
    }

    switch (props.inputType) {
        case('input'):
            inputElement = <input onChange={props.changed} className={classesArray.join(' ')} value={props.value} {...props.inputConfig}/>;
            break;

        case('textarea'):
            classesArray.push('textarea');
            inputElement = <textarea onChange={props.changed} className={classesArray.join(' ')} value={props.value} {...props.inputConfig}/>;
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