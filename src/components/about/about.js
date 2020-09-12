import React, { Component } from 'react';
import menuApi from '../../api/menuApi';
import './about.css';
import CarouselPage from './carousel/carousel';

class About extends Component {
    constructor(progs) {
        super(progs);

        this.state = {
            about: {},
            service: []
        }
    }

    componentDidMount() {
        menuApi.getMenu().then(response => {
            this.setState({
                about: response['about'],
                service: response['about']['service']
            })
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        let { service } = this.state;
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
            <div className="title">
                <span>My</span>
                Service
            </div>
            <div className="row1 about">
                {
                    service && service.map((item, index) => {
                        return <div key={index} className="about__service">
                            <div><img src={item.icon} alt="icon"></img></div>
                            <p>{item.name}</p>
                            <span>{item.title}</span>
                        </div>
                    })
                }
            </div>

            <CarouselPage></CarouselPage>
        </div>
    }
}

export default About