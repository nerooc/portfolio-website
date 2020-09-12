import React from 'react';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import separator from '../../../../Images/separatorBlack.png';

import './Contact.css';

class Contact extends React.Component {
    state = {
        formConfig: {
            name: {
                elementType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'ENTER YOUR NAME'
                },
                value: ''
            },

            email: {
                elementType: 'input',
                config: {
                    type: 'email',
                    placeholder: 'ENTER YOUR EMAIL'
                },
                value: ''
            },

            number: {
                elementType: 'input',
                config: {
                    type: 'number',
                    placeholder: 'PHONE NUMBER'
                },
                value: ''
            },

            message: {
                elementType: 'textarea',
                config: {
                    type: 'text',
                    placeholder: 'YOUR MESSAGE'
                },
                value: ''
            }
        }
    }

    inputChangeHandler = (event, elementID) => {
        const updatedForm = {
            ...this.state.formConfig
        }

        const updatedFormElement = {
            ...updatedForm[elementID]
        }

        updatedFormElement.value = event.target.value;
        updatedForm[elementID] = updatedFormElement;

        this.setState({formConfig: updatedForm})
    }

    contactHandler = (event) => {
        event.preventDefault();

        const mail = {
            name: this.state.formConfig.name.value,
            email: this.state.formConfig.email.value,
            number:this.state.formConfig.number.value,
            message: this.state.formConfig.message.value
        }
        
        /* email sending */
        console.log(mail);

    }

    render() {

        const contactForm = Object
            .keys(this.state.formConfig)
            .map((key) => {
                return ({id: key, element: this.state.formConfig[key]})
            });

        const form = (
            <>
                {contactForm.map((formElement => {
                    return <Input
                        key={formElement.id}
                        changed=
                        {(event) => this.inputChangeHandler(event, formElement.id)}
                        inputType={formElement.element.elementType}
                        inputConfig={formElement.element.config}
                        value={formElement.element.value}/>;
                }))}
            </>
        );
        

        return (
            <div className="contact">
                <SectionHeader className="contact__header">CONTACT</SectionHeader>

                <Paragraph className="contact__paragraph">
                    My name is Tomasz Gajda, I’m a third year Applied Computer Science student at
                    AGH University of Science and Technology in Cracow, Poland.
                </Paragraph>

                <img src={separator} className="contact__separator" alt="contactSeparator"/>

                <div className="contact__formwrapper">
                    {form}
                </div>

                <Button onClick = {this.contactHandler} className="contact__submit">SUBMIT</Button>

            </div>
        );
    }
}

export default Contact;
