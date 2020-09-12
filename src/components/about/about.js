import React, { Component } from 'react';
import menuApi from '../../api/menuApi';
import './about.css'

class About extends Component {
    constructor(progs) {
        super(progs);

        this.state = {
            about: {}
        }
    }

    componentDidMount() {
        menuApi.getMenu().then(response => {
            this.setState({
                about: response['about'],
            })
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const { information } = this.state.about;
        return <div className="row">
            <div className="title">
                <span>About</span>
                Me
            </div>
            { information && 
                <div className="about">
                    <div className="information__des">
                        <p className="m-0">{information.description}</p>
                    </div>
                    <ul className="information">
                        <li>
                            <span>Name . . . </span>
                            <p>{information.name}</p>
                        </li>
                        <li>
                            <span>Age . . . </span>
                            <p>{information.age}</p>
                        </li>
                        <li>
                            <span>Residence . . . </span>
                            <p>{information.residence}</p>
                        </li>
                        <li>
                            <span>Freelance . . . </span>
                            <p>{information.freelance ? 'Available' : 'Not now'}</p>
                        </li>
                        <li>
                            <span>Address . . . </span>
                            <p>{information.address}</p>
                        </li>
                    </ul>
                </div>
            }
        </div>
    }
}

export default About