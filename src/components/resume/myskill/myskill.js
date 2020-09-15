import React, { Component } from 'react';

class Myskill extends Component {
    constructor(props) {
        super(props)

        this.myref = React.createRef();
    }

    componentDidUpdate() {
        if ( this.props.data.coding ) {
            let dots = Array.from(this.myref.current.children);
            let number = this.props.data.coding.wordpress / 10;
            let unold = Math.floor(number)
            let old = number - unold;
            dots.map((item, index) => {
                if(index < unold) {
                    return item.style.background = 'red';
                }
                return item.style.background = '#ddd';
            })
            dots[unold].style.background = 'rgb(235,28,28)';
            dots[unold].style.background = `linear-gradient(90deg, rgba(235,28,28,1) ${old*100}%, #ddd ${100-(old*100)}%)`;
        }
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
                            <li className="skill__main">
                                <label htmlFor="web">Website</label>
                                <progress id="web" value={design.web} max="100"> {design.web}% </progress>
                            </li>
                            <li className="skill__main">
                                <label htmlFor="edit">Edit</label>
                                <progress id="edit" value={design.edit} max="100"> {design.edit}% </progress>
                            </li>
                            <li className="skill__main">
                                <label htmlFor="record">Record</label>
                                <progress id="wrecordeb" value={design.record} max="100"> {design.record}% </progress>
                            </li>
                            <li className="skill__main">
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
                                <div ref={this.myref}>
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
                        <div className="skill__main">
                            <div></div>
                        </div>
                    </div>
                }
                {
                    knowledge && <div className="skill">
                        <div className="skill__icon">
                            <img src={knowledge.icon} alt="icon"></img>
                            <span>Knowledge</span>
                        </div>
                        <div className="skill__main">
                            <div></div>
                        </div>
                    </div>
                }
            </div>
        </div>
    }
}

export default Myskill