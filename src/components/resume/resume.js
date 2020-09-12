import React, { Component } from 'react';
import menuApi from '../../api/menuApi';
import './resume.css'

class Resume extends Component {
    constructor(progs) {
        super(progs)

        this.state = {
            education: [],
            experience: []
        }
    }

    componentDidMount() {
        menuApi.getMenu().then(response => {
            this.setState({
                education: response['resume']['resumedetail']['education'],
                experience: response['resume']['resumedetail']['experience']
            })
        })


    }

    render() {
        let { education, experience } = this.state;
        return <div className="row">
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
                                    <p className="name">{item.name}</p>
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
                                    <a href={item.link} className="name">{item.name}</a>
                                    <span className="position">{item.position}</span>
                                    <p>{item.location}</p>
                                    <p>{item.description}</p>
                                </div>

                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Resume;