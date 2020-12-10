import React, { Component } from 'react';
import MyComponent from './googleMap/googleMap';
import './contact.css';
import ContactForm from './contactForm/contactForm';
import { css } from "@emotion/core";
import CircleLoader from "react-spinners/CircleLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: -10rem;
`;

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            return this.setState({ loading: false })
        }, 2000)
    }

    render() {
        return <div>
            {
                this.state.loading ? <div className="sweet-loading">
                    <CircleLoader
                        css={override}
                        size={150}
                        color={"#7ED321"}
                        loading={this.state.loading}
                    />
                </div> : <div className="mycomponent">
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

        </div>
    }
}

export default Contact;