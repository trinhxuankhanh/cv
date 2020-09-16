import React, { Component } from 'react';
import MyComponent from './googleMap/googleMap';
import './contact.css'

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

            </div>
        </div>
    }
}

export default Contact;