import React, { Component } from 'react';
import MyComponent from './googleMap/googleMap';
import './contact.css';
import ContactForm from './contactForm/contactForm'

class Contact extends Component {
    render() {
        return <div className="mycomponent">
            <div className="map">
                <div className="title">
                    <span>Get</span>in Touch
                </div>
                <MyComponent isMarkerShown></MyComponent>
            </div>
            <div className="formcontact">
                <div className="title">
                    <span>Contact</span>Form
                </div>
                <ContactForm></ContactForm>
            </div>
        </div>
    }
}

export default Contact;