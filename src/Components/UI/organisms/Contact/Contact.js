import React from 'react';
import emailjs from 'emailjs-com';
import {template, userId} from '../../../../keys';

import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

import './Contact.css';

class Contact extends React.Component {
    state = {
        formConfig: {
            name: {
                elementType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'ENTER YOUR NAME*'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },

            email: {
                elementType: 'input',
                config: {
                    type: 'email',
                    placeholder: 'ENTER YOUR EMAIL*'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },

            number: {
                elementType: 'input',
                config: {
                    type: 'number',
                    placeholder: 'PHONE NUMBER'
                },
                value: '',
                validation: {
                    required: false
                },

                valid: true
            },

            message: {
                elementType: 'textarea',
                config: {
                    type: 'text',
                    placeholder: 'YOUR MESSAGE*'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },

        email: {
            emailBeingSent: false,
            emailSent: false,
            emailSuccess: null
        },

        highlighted: false

    }

    handleValidation = (value, validation) => {
        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '';
        }

        return isValid;
    }

    inputChangeHandler = (event, elementID) => {
        const updatedForm = {
            ...this.state.formConfig
        }

        const updatedFormElement = {
            ...updatedForm[elementID]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.handleValidation(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedForm[elementID] = updatedFormElement;

        this.setState({formConfig: updatedForm, highlighted: false})
    }

    contactHandler = (event) => {
        event.preventDefault();

        const form = this.state.formConfig;

        const mail = {
            name: form.name.value,
            email: form.email.value,
            number: form.number.value,
            message: form.message.value
        }

        console.log(form.name);

        if (form.name.valid && form.email.valid && form.number.valid && form.message.valid) {

            this.setState({
                email: {
                    emailBeingSent: true
                }
            })

            emailjs
                .send('Gmail', template, mail, userId)
                .then((result) => {
                    this.resetElementsValues();
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
        } else {
            this.setState({highlighted: true});
        }
    }

    resetElementsValues = () => {
        const updatedForm = {
            ...this.state.formConfig
        }

        for (let element in updatedForm) {
            let updatedFormElement = {
                ...updatedForm[element]
            }
            updatedFormElement.value = '';
            updatedForm[element] = updatedFormElement;
        }

        this.setState({formConfig: updatedForm});
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
                        valid={formElement.element.valid}
                        changed=
                        {(event) => this.inputChangeHandler(event, formElement.id)}
                        inputType={formElement.element.elementType}
                        inputConfig={formElement.element.config}
                        value={formElement.element.value}
                        touched={formElement.element.touched}
                        highlighted={this.state.highlighted}/>;

                }))}
            </div>
        );

        let emailResult = null;

        if (this.state.email.emailBeingSent) {
            emailResult = <div className="contact__email">
                Email is being sent...
            </div>;

            if (this.state.email.emailSent) {
                emailResult = this.state.email.emailSuccess
                    ? <div className="contact__email emailSent">
                            The email has been successfully sent!
                        </div>
                    : <div className="contact__email emailError">
                        There has been an error with sending...
                    </div>

            }

            // Turn the notification off after 6 seconds
            setTimeout(() => {
                this.setState({
                    email: {
                        emailSent: false
                    }
                })
            }, 6000);
        }

        let formWrapperClasses = ['contact__formwrapper'];

        if (this.state.highlighted) {
            formWrapperClasses.push('contact__formwrapper--highlighted');
        }

        return (

            <div className="contact">
                <SectionHeader className="contact__header">CONTACT</SectionHeader>

                <Paragraph className="contact__paragraph">
                    If you are interested in cooperation or would like to hire me for your project -
                    please contact me by e-mail <span style={{fontWeight: "bold"}}>(tomasz_gajda@outlook.com)</span> or use the form below.
                </Paragraph>

                <img
                    src="./images/separators/separatorBlack.png"
                    className="contact__separator"
                    alt="contactSeparator"/>

                <div className={formWrapperClasses.join(' ')}>
                    {form}
                    Fields marked with an asterisk must be filled. {emailResult}
                </div>

                <Button
                    bold
                    onClick={this.contactHandler}
                    className="contact__submit contact__emailSent">SUBMIT</Button>

            </div>

        );
    }
}

export default Contact;
