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

    render() {
        let { photo, video, design } = this.state
        return <div className="word">
            <div className="title">
                <span>Recent</span>Words
            </div>
            <ul className="word__menu">
                <li onClick={() => this.onGetAllItem()}>All</li>
                <li>Photo</li>
                <li>Video</li>
                <li>Design</li>
            </ul>
            <div className="word__main">
                <ul>
                    {
                        // design && design.map((item, index) => {
                        //     return <li key={index}>
                        //         <img src={item.link} alt="icon"></img>
                        //         <span>{item.name}</span>
                        //     </li>
                        // })
                    }
                </ul>
            </div>
        </div>
    }
}

export default Word;