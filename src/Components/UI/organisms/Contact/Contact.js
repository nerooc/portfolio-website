import React from 'react';
import emailjs from 'emailjs-com';
import { template, userId } from '../../../../keys';

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
        },

        email: {
            emailBeingSent: false,
            emailSent: false,
            emailSuccess: null
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

        this.setState({
            email: {
                emailBeingSent: true
            }
        })

        emailjs.send('Gmail', template, mail, userId)
            .then((result) => {
                this.setState({
                    email: {
                        emailBeingSent: true,
                        emailSent: true,
                        emailSuccess: true
                    }
                })
            }, (error) => {
                this.setState({
                    email: {
                        emailBeingSent: true,
                        emailSent: true,
                        emailSuccess: false
                    }
                })
                console.log(error.text);
            });
    }

    render() {

        const contactForm = Object
            .keys(this.state.formConfig)
            .map((key) => {
                return ({id: key, element: this.state.formConfig[key]})
            });

        const form = (
            <div className="contact__form">
                {contactForm.map((formElement => {
                    return <Input
                        key={formElement.id}
                        changed=
                        {(event) => this.inputChangeHandler(event, formElement.id)}
                        inputType={formElement.element.elementType}
                        inputConfig={formElement.element.config}
                        value={formElement.element.value}/>;
                }))}
            </div>
        );
        
        let emailResult = null;

        if(this.state.email.emailBeingSent){
            emailResult = <div className="contact__email"> The email is being sent... </div>;

            if (this.state.email.emailSent) {
                emailResult = this.state.email.emailSuccess
                    ? <div className="contact__email emailSent">
                            The email was sent successfully!
                        </div>
                    : <div className="contact__email emailError">
                        There has been an error when sending the email!
                        </div>
            }
        }

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
                        {emailResult} 
                    </div>

                    <Button onClick = {this.contactHandler} className="contact__submit contact__emailSent">SUBMIT</Button>

                </div>
                
        );
    }
}

export default Contact;
