import React, { Component } from 'react';
import rain from '../assets/sounds/rain.mp3'

class Audio extends Component {
    render() {
        return (
            <div>
                <audio src={rain} controls></audio>
            </div>
        )
    }
}

export default Audio