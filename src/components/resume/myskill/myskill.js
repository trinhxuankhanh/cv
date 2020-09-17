import React, { Component } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class Myskill extends Component {
    constructor(props) {
        super(props)

        this.wordpress = React.createRef();
        this.react = React.createRef();
        this.angular = React.createRef();
        this.htmlcss = React.createRef();
        this.sql = React.createRef();
        this.node = React.createRef();
    }

    progressLoading(data, myref, color) {
        if (data) {
            let shape = Array.from(myref);
            let number = data / 10;
            let unold = Math.floor(number);
            let old = number - unold;
            shape.map((item, index) => {
                return (index < unold) ? item.style.background = color : item.style.background = '#ddd';
            })
            if (old !== 0) {
                shape[unold].style.background = color;
                shape[unold].style.background = `linear-gradient(90deg, ${color} ${100 - (old * 100)}%, #ddd ${old * 100}%)`;
            }
        }
    }

    componentDidUpdate() {
        this.progressLoading(this.props.data.coding.wordpress, this.wordpress.current.children, '#007bff')
        this.progressLoading(this.props.data.coding.react, this.react.current.children, '#007bff')
        this.progressLoading(this.props.data.coding.angular, this.angular.current.children, '#007bff')
        this.progressLoading(this.props.data.coding.htmlcss, this.htmlcss.current.children, '#007bff')
        this.progressLoading(this.props.data.coding.sql, this.sql.current.children, '#007bff')
        this.progressLoading(this.props.data.coding.node, this.node.current.children, '#007bff')
    }

    render() {
        let { design, coding, languages, knowledge } = this.props.data
        return <div className="resume resume__myskill">
            <div className="title">
                <span>My</span> skill
            </div>
            <div className="myskill">
                {
                    design && <div className="skill">
                        <div className="skill__icon">
                            <img src={design.icon} alt="icon"></img>
                            <span>Design</span>
                        </div>
                        <ul className="skills">
                            <li className="skill__main f-10">
                                <label htmlFor="web">Website</label>
                                <progress id="web" value={design.web} max="100"> {design.web}% </progress>
                            </li>
                            <li className="skill__main f-10">
                                <label htmlFor="edit">Edit</label>
                                <progress id="edit" value={design.edit} max="100"> {design.edit}% </progress>
                            </li>
                            <li className="skill__main f-10">
                                <label htmlFor="record">Record</label>
                                <progress id="wrecordeb" value={design.record} max="100"> {design.record}% </progress>
                            </li>
                            <li className="skill__main f-10">
                                <label htmlFor="app">Application</label>
                                <progress id="app" value={design.app} max="100"> {design.app}% </progress>
                            </li>
                        </ul>
                    </div>
                }
                {
                    coding && <div className="skill">
                        <div className="skill__icon">
                            <img src={coding.icon} alt="icon"></img>
                            <span>Coding</span>
                        </div>
                        <ul>
                            <li className="skill__main skill__main--dot">
                                <span>Wordpress</span>
                                <div ref={this.wordpress}>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                            </li>
                            <li className="skill__main skill__main--dot">
                                <span>React</span>
                                <div ref={this.react}>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                            </li>
                            <li className="skill__main skill__main--dot">
                                <span>Angular</span>
                                <div ref={this.angular}>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                            </li>
                            <li className="skill__main skill__main--dot">
                                <span>HTMl / CSS</span>
                                <div ref={this.htmlcss}>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                            </li>
                            <li className="skill__main skill__main--dot">
                                <span>SQL</span>
                                <div ref={this.sql}>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                            </li>
                            <li className="skill__main skill__main--dot">
                                <span>Node</span>
                                <div ref={this.node}>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                }
                {
                    languages && <div className="skill">
                        <div className="skill__icon">
                            <img src={languages.icon} alt="icon"></img>
                            <span>Languages</span>
                        </div>
                        <div className="skill__main skill__main--m0">
                            <CircularProgressbarWithChildren value={languages.english}>
                                <img style={{ width: 170, marginTop: -20 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                                <div style={{ fontSize: 16, marginTop: -20 }}>
                                <strong>{`English: ${languages.english}%`}</strong>
                            </div>
                            </CircularProgressbarWithChildren>
                        </div>
                    </div>
                }
                {
                    knowledge && <div className="skill">
                        <div className="skill__icon">
                            <img src={knowledge.icon} alt="icon"></img>
                            <span>Knowledge</span>
                        </div>
                        <ul>
                            {
                                knowledge.skill.map((item, index) => <li className="skill__main" key={index}>
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/1828/1828643.svg" width="20px" height="20px" alt="icon"></img>
                                    <span>{item}</span>
                                </li>)
                            }
                        </ul>
                    </div>
                }
            </div>
        </div>
    }
}

export default Myskill