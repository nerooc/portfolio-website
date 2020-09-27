import React from 'react';
import './Input.css';

/* dynamic input component */
const Input = (props) => {
    let inputElement = null;

    /* array of classes that will be connected with specific input element */
    let classesArray = ['input'];

    /* class pushed conditionally when input element empty */
    if(!props.valid && props.touched){
        classesArray.push('invalid');
    }

    /* class pushed conditionally when input element empty after sumbitting */
    if(!props.valid && props.highlighted){
        classesArray.push('invalidHighlight');
    }

    /* switch statement choosing which input element will be rendered */
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