import React, { Component } from 'react';
import menuApi from '../../api/menuApi';
import './resume.css';
import Myskill from './myskill/myskill';
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin: -10rem 0 0 17rem;
`;

class Resume extends Component {
    constructor(progs) {
        super(progs)

        this.state = {
            education: [],
            experience: [],
            myskill: {},
            loading: true
        }
    }

    componentDidMount() {
        menuApi.getMenu().then(response => {
            this.setState({
                education: response['resume']['resumedetail']['education'],
                experience: response['resume']['resumedetail']['experience'],
                myskill: response['resume']['myskill']
            })
        })

        setTimeout(() => {
            return this.setState({ loading: false })
        }, 2000)
    }

    render() {
        let { loading, education, experience, myskill } = this.state;
        return <div className="row">
            {
                loading ? <div className="sweet-loading sweet-loading--cus">
                    <RingLoader
                        css={override}
                        size={150}
                        color={"#7ED321"}
                        loading={loading}
                    />
                </div> : <div>
                        <div className="title">
                            <span>Resume</span>
                        </div>
                        <div className="resume">
                            <div className="resume__edu">
                                <div className="resume__eduicon">
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/2987/2987867.svg" alt="icon"></img>
                                    <p>Education</p>
                                </div>
                                <div className="resume__eduitem">
                                    {
                                        education && education.map((item, index) => {
                                            return <div key={index} className="item">
                                                <div className="my-3"><span className="time">{item.time}</span></div>
                                                <a onClick={() => window.open(item.link)} href="#viewschool" className="name">{item.name}</a>
                                                <span className="position">{item.position}</span>
                                                <p>{item.location}</p>
                                                <p>{item.description}</p>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                            <div className="resume__exp">
                                <div className="resume__expicon">
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/1508/1508904.svg" alt="icon"></img>
                                    <p>Experience</p>
                                </div>
                                <div className="resume__expitem">
                                    {
                                        experience && experience.map((item, index) => {
                                            return <div key={index} className="item">
                                                <div className="my-3"><span className="time">{item.time}</span></div>
                                                <a onClick={() => window.open(item.link)} href="#viewgit" className="name">{item.name}</a>
                                                <span className="position">{item.position}</span>
                                                <p>{item.location}</p>
                                                <p>{item.description}</p>
                                            </div>

                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <Myskill data={myskill}></Myskill>
                    </div>
            }
        </div>
    }
}

export default Resume;