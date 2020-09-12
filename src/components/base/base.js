import React, { Component } from 'react';
import baseApi from '../../api/baseApi';
import "./base.css"

class Base extends Component {
    constructor(progs) {
        super(progs);

        this.state = {
            base : {},
            contact: {},
            icon: '',
        }
    }

    componentDidMount() {
        baseApi.getBase().then(response => {
            this.setState({
                base: response,
                contact: response['contact']
            })
        }).catch(error => {
            console.log(error)
        })
    }

    changeIcon(icon, iconHovered, e) {
        if(e.target.src === iconHovered) {
            this.setState({icon: icon})
            e.target.src = icon
        } else {
            this.setState({icon: iconHovered})
            e.target.src = iconHovered
        }
    }

    render() {
        const { img, name, position } = this.state.base;
        const { github, facebook, gmail, phone } = this.state.contact;
        return (
            <div className="base">
                <div className="base__img">
                    <img src={img} alt="avt"></img>
                </div>
                
                <p className="base__name">{name}</p>
                <span className="base__pos">{position}</span>
                
                <div className="base__contact">
                    { github && <a href={github.link}
                        onMouseEnter={(e) => this.changeIcon(github.changeicon, github.icon, e)}>
                        <img src={github.icon} alt="icon"></img>
                        </a> }
                    { facebook && <a href={facebook.link}
                        onMouseEnter={(e) => this.changeIcon(facebook.changeicon, facebook.icon, e)}>
                        <img src={facebook.icon} alt="icon"></img>
                        </a> }
                    { gmail && <a href={`mailto:${gmail.link}`}
                        onMouseEnter={(e) => this.changeIcon(gmail.changeicon, gmail.icon, e)}>
                        <img src={gmail.icon} alt="icon"></img>
                        </a> }
                    { phone && <a href={`tel:${phone.link}`}
                        onMouseEnter={(e) => this.changeIcon(phone.changeicon, phone.icon, e)}>
                        <img src={phone.icon} alt="icon"></img>
                        </a> }
                </div>
            </div>
        )
    }
}

export default Base;