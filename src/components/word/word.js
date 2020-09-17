import React, { Component } from 'react';
import menuApi from '../../api/menuApi';
import './word.css';

class Word extends Component {
    constructor(progs) {
        super(progs)

        this.state = {
            photo: [],
            video: [],
            design: []
        }

        this.all = React.createRef();
        this.imgzoom = React.createRef();
        this.imgzoom1 = React.createRef();
        this.screen1 = React.createRef();
        this.videozoom = React.createRef();
        this.screen = React.createRef();
        this.divnone = React.createRef();
        this.divnonevideo = React.createRef();
        this.divimgnone = React.createRef()
    }

    componentDidMount() {
        menuApi.getMenu().then(response => {
            this.setState({
                photo: response['word']['myword'][0],
                video: response['word']['myword'][1],
                design: response['word']['myword'][2],
            })
        }).catch(error => {
            console.log(error)
        })
    }

    onGetAllItem() {
        Array.from(this.all.current.children).map(item => item.style.display = "flex")
    }
    
    onGetPhoto() {
        Array.from(this.all.current.children).map(item => {
            item.style.display = "none"
            if(item.className === "items item__photo") {
                item.style.display = "flex"
            }
        })
    }

    onGetVideo() {
        Array.from(this.all.current.children).map(item => {
            item.style.display = "none"
            if(item.className === "items item__video") {
                item.style.display = "flex"
            }
        })
    }

    onGetDesign() {
        Array.from(this.all.current.children).map(item => {
            item.style.display = "none"
            if(item.className === "items item__design") {
                item.style.display = "flex"
            }
        })
    }

    zoomImg(e) {
        this.divnone.current.style.display = "block";
        this.imgzoom.current.src = e.target.src;
        this.screen.current.innerHTML = e.target.alt;
    }

    zoomImg1(e) {
        this.divimgnone.current.style.display = "block";
        this.imgzoom1.current.src = e.target.src;
        this.screen1.current.innerHTML = e.target.alt;
    }

    onOutZoom() {
        this.divnone.current.style.display = "none";
        this.divnonevideo.current.style.display = "none";
        this.divimgnone.current.style.display = "none";
    }

    zoomVideo(e) {
        this.divnonevideo.current.style.display = "block";
        this.videozoom.current.src = e.target.title;
        this.screen.current.innerHTML = e.target.alt;
    }

    render() {
        let { photo, video, design } = this.state
        return <div className="word">
            <div className="title">
                <span>Recent</span>Words
            </div>
            <ul className="word__menu">
                <li onClick={() => this.onGetAllItem()}>All</li>
                <li onClick={() => this.onGetPhoto()}>Photo</li>
                <li onClick={() => this.onGetVideo()}>Video</li>
                <li onClick={() => this.onGetDesign()}>Design</li>
            </ul>
            <div className="word__main">
                <ul ref={this.all}>
                    {
                        photo && photo.map((item, index) => {
                            return <li key={index} className="items item__photo">
                                <img src={item.link} alt={item.name} onClick={(e) => this.zoomImg1(e)}></img>
                                <span>{item.name}</span>
                                <div ref={this.divimgnone} className="zoom3">
                                    <span className="close" onClick={() => this.onOutZoom()}>&times;</span>
                                    <img className="modal-content" ref={this.imgzoom1}></img>
                                    <div ref={this.screen1} className="caption"></div>
                                </div>
                            </li>
                        })
                    }
                    {
                        video && video.map((item, index) => {
                            return <li key={index} className="items item__video">
                                <img alt={item.name} src={item.img} title={item.link} onClick={(e) => this.zoomVideo(e)}></img>
                                <span>{item.name}</span>
                                <div ref={this.divnonevideo} className="zoom1">
                                    <span className="close" onClick={() => this.onOutZoom()}>&times;</span>
                                    <iframe className="modal-content modal-contentvideo" ref={this.videozoom} src={item.link} frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                                    <div ref={this.screen} className="caption"></div>
                                </div>
                            </li>
                        })
                    }
                    {
                        design && design.map((item, index) => {
                            return <li key={index} className="items item__design">
                                <img src={item.link} alt={item.name} onClick={(e) => this.zoomImg(e)}></img>
                                <span>{item.name}</span>
                                <div ref={this.divnone} className="zoom">
                                    <span className="close" onClick={() => this.onOutZoom()}>&times;</span>
                                    <img className="modal-content" ref={this.imgzoom}></img>
                                    <div ref={this.screen} className="caption"></div>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    }
}

export default Word;