import React, { Component } from "react";
import menuApi from '../../api/menuApi';
import './menu.css';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(progs) {
        super(progs)

        this.state = {
            menu: {}
        }
    }

    componentDidMount() {
        menuApi.getMenu().then(response => {
            this.setState({
                menu: response,
            })
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const { about, word, resume, contact } = this.state.menu
        return (
            <ul className="menu">
                <li>
                    <Link to="/">
                        {
                            about && <img src={about.icon} alt="icon" height="20px" width="20px"></img>
                        }
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/word">
                        {
                            word && <img src={word.icon} alt="icon" height="20px" width="20px"></img>
                        }
                        Word
                    </Link>
                </li>
                <li>
                    <Link to="/resume">
                        {
                            resume && <img src={resume.icon} alt="icon" height="20px" width="20px"></img>
                        }
                        Resume
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        {
                            contact && <img src={contact.icon} alt="icon" height="20px" width="20px"></img>
                        }
                        Contact
                    </Link>
                </li>
            </ul>
        )
    }
}

export default Menu