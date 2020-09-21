import React, { Component } from 'react';
import baseApi from '../../api/baseApi';
import "./base.css";
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 50%;
`;

class Base extends Component {
    constructor(progs) {
        super(progs);

        this.state = {
            base: {},
            contact: {},
            icon: '',
            loading: true,
            mode: true
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

        setTimeout(() => {
            return this.setState({ loading: false })
        }, 2000)
    }

    changeIcon(icon, iconHovered, e) {
        if (e.target.src === iconHovered) {
            this.setState({ icon: icon })
            e.target.src = icon
        } else {
            this.setState({ icon: iconHovered })
            e.target.src = iconHovered
        }
    }

    changeMode() {
        this.setState({ mode: !this.state.mode })

        if (this.state.mode) {
            this.props.mode.current.children[1].children[0].children[0].style.background = 'rgb(13,18,54)';
            this.props.mode.current.children[1].children[0].children[0].style.color = '#fff';
            this.props.mode.current.children[1].children[1].style.background = 'rgb(13,18,54)';
            this.props.mode.current.children[1].children[1].style.color = '#fff';
            this.props.mode.current.children[0].children[0].style.background = 'rgb(13,18,54)';
            Array.from(this.props.mode.current.children[0].children[0].children).map(item =>
                item.children[0].style.color = '#fff');

            this.props.bg.current.className = "area bg--dark"

            this.props.mode.current.children[1].className = "content content__item--dark"
        } else {
            this.props.mode.current.children[1].children[0].children[0].style.background = '#fff';
            this.props.mode.current.children[1].children[0].children[0].style.color = '#323232';
            this.props.mode.current.children[1].children[1].style.background = '#fff';
            this.props.mode.current.children[1].children[1].style.color = '#323232';
            this.props.mode.current.children[0].children[0].style.background = '#fff';
            Array.from(this.props.mode.current.children[0].children[0].children).map(item =>
                item.children[0].style.color = '#323232');

            this.props.bg.current.className = "area"

            this.props.mode.current.children[1].className = "content"
        }

    }

    render() {
        const { cv, img, name, position } = this.state.base;
        const { discord, github, facebook, gmail, phone } = this.state.contact;
        return (
            <div className="base">
                {
                    this.state.loading ?
                        <div className="sweet-loading">
                            <BounceLoader
                                css={override}
                                size={100}
                                color={"#7ED321"}
                                loading={this.state.loading}
                            />
                        </div> : <div className="base base__main">

                            <div className="base__img">
                                <img src={img} alt="avt"></img>
                            </div>

                            <p className="base__name">{name}</p>
                            <span className="base__pos">{position}</span>

                            <div className="base__contact">
                                {github && <a href="#git"
                                    onClick={() => window.open(github.link)}
                                    onMouseEnter={(e) => this.changeIcon(github.changeicon, github.icon, e)}>
                                    <img src={github.icon} alt="icon"></img>
                                </a>}
                                {facebook && <a href="#facebook"
                                    onClick={() => window.open(facebook.link)}
                                    onMouseEnter={(e) => this.changeIcon(facebook.changeicon, facebook.icon, e)}>
                                    <img src={facebook.icon} alt="icon"></img>
                                </a>}
                                {gmail && <a href={`mailto:${gmail.link}`}
                                    onMouseEnter={(e) => this.changeIcon(gmail.changeicon, gmail.icon, e)}>
                                    <img src={gmail.icon} alt="icon"></img>
                                </a>}
                                {phone && <a href={`tel:${phone.link}`}
                                    onMouseEnter={(e) => this.changeIcon(phone.changeicon, phone.icon, e)}>
                                    <img src={phone.icon} alt="icon"></img>
                                </a>}
                                {discord && <a href="#discord"
                                    onClick={() => window.open(discord.link)}
                                    onMouseEnter={(e) => this.changeIcon(discord.changeicon, discord.icon, e)}>
                                    <img src={discord.icon} alt="icon"></img>
                                </a>}
                            </div>

                            <div className="base__bot">
                                {
                                    cv && <a href="#downcv" onClick={() => window.open(cv)} className="btn btn-outline-primary">Download CV</a>
                                }
                                <button onClick={() => this.changeMode()} type="button" className="btn btn-outline-success">Dard Mode</button>
                            </div>

                        </div>
                }
            </div>
        )
    }
}

export default Base;