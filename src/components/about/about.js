import React, { Component } from 'react';
import menuApi from '../../api/menuApi';
import './about.css';
import CarouselPage from './carousel/carousel';
import { css } from "@emotion/core";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 15rem;
`;

class About extends Component {
    constructor(progs) {
        super(progs);

        this.state = {
            about: {},
            service: [],
            loading: true
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

        setTimeout(() => {
            return this.setState({ loading: false })
        }, 3000)
    }

    render() {
        let { loading, service } = this.state;
        const { information } = this.state.about;
        return <div>
            {
                loading ?
                    <div className="sweet-loadingm">
                        <ClimbingBoxLoader
                            css={override}
                            size={45}
                            color={"#7ED321"}
                            loading={loading}
                        />
                    </div> :
                    <div className="row">
                        <div className="title">
                            <span>About</span>
                    Me
                </div>
                        {information &&
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
        </div>
    }
}

export default About