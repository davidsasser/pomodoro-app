import React, { Component } from 'react';
import rain from '../assets/images/audioImages/rain.png';
import thunder from '../assets/images/audioImages/lightning.png';
import fire from '../assets/images/audioImages/fire.png';
import waves from '../assets/images/audioImages/waves.png';
import wind from '../assets/images/audioImages/wind.png';
import rainforest from '../assets/images/audioImages/rainforest.png';
import lofi from '../assets/images/audioImages/lofi.png';
import classical from '../assets/images/audioImages/violin.png';
import jazz from '../assets/images/audioImages/jazz.png';
import coffee from '../assets/images/audioImages/coffee.png';
import birds from '../assets/images/audioImages/bird.png';
import rainAudio from '../assets/sounds/rain.mp3'
import waveAudio from '../assets/sounds/waves.wav'
import windAudio from '../assets/sounds/wind.wav'
import coffeeAudio from '../assets/sounds/coffee.wav'
import thunderAudio from '../assets/sounds/thunderstorm.mp3'
import lofiAudio from '../assets/sounds/lofi.mp3'
import fireAudio from '../assets/sounds/fire.mp3'
import classicalAudio from '../assets/sounds/classical.mp3'
import rainforestAudio from '../assets/sounds/rainforest.mp3'
import jazzAudio from '../assets/sounds/jazz.mp3'
import birdsAudio from '../assets/sounds/birds.wav'

let audioOptions1 = [
    { name: "Rain", src: rain, audio: rainAudio },
    { name: "Thunderstorm", src: thunder, audio: thunderAudio },
    { name: "Fire", src: fire, audio: fireAudio },
    { name: "Waves", src: waves, audio: waveAudio },
    { name: "Wind", src: wind, audio: windAudio },
    { name: "Rainforest", src: rainforest, audio: rainforestAudio }
]
let audioOptions2 = [
    { name: "Lofi Music", src: lofi, audio: lofiAudio },
    { name: "Classical Music", src: classical, audio: classicalAudio },
    { name: "Jazz Music", src: jazz, audio: jazzAudio },
    { name: "Coffee Shop", src: coffee, audio: coffeeAudio },
    { name: "Birds", src: birds, audio: birdsAudio }
]

class Timer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedAudio: null,
            audioSource: null
        }
        this.selectAudio = this.selectAudio.bind(this);
    }

    selectAudio(name, audioSource) {
        this.setState({
            selectedAudio: name,
            audioSource: audioSource
        });
        this.player.src = audioSource;
        this.player.play();
    }

    render() {
        const listItems1 = audioOptions1.map((opt) =>
            <div className="audio-container"><button onClick={(e) => this.selectAudio(opt.name, opt.audio, e)} className={opt.name === this.state.selectedAudio ? 'image-container selected' : 'image-container'}><img src={opt.src}></img><label>{opt.name}</label></button></div>
        );

        const listItems2 = audioOptions2.map((opt) =>
            <div className="audio-container"><button onClick={(e) => this.selectAudio(opt.name, opt.audio, e)} className={opt.name === this.state.selectedAudio ? 'image-container selected' : 'image-container'}><img src={opt.src}></img><label>{opt.name}</label></button></div>
        );
        return (
            <div className="audio-list">
                <div className="row1">{listItems1}</div>
                <br></br>
                <div className="row2">{listItems2}</div>
                <audio ref={ref => (this.player = ref)} />
            </div>
        )
    }

    componentWillUnmount() {
        this.setState({
            selectedAudio: null
        })
    }
}

export default Timer