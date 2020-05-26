import React, { Component } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import functions from '../utils/formatTimer';

class Timer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            timerLength: 1500,
            timer: null,
            hasStarted: false,
            isPaused: true
        }
        this.playPauseTimer = this.playPauseTimer.bind(this);
    }


    playPauseTimer() {
        if (!this.state.hasStarted) {
            console.log("changing timer")
            let timer = this.state.timerLength
            this.setState({
                timer: timer
            })
        }
        if (this.state.isPaused) {
            this.setState({
                hasStarted: true
            })
            this.myInterval = setInterval(() => {
                if (this.state.timer === 0) {
                    clearInterval(this.myInterval)
                }
                this.setState(prevState => ({
                    timer: prevState.timer - 1
                }))
            }, 1000);
        }
        else {
            clearInterval(this.myInterval)
        }
        this.setState({
            isPaused: !this.state.isPaused
        })
        console.log(this.state.isPaused)
    }

    render() {
        var timer

        if (this.state.hasStarted) {
            timer = formatTimerHTML(this.state.timer)
        }
        else {
            timer = formatTimerHTML(this.state.timerLength)
        }
        let button
        if (this.state.isPaused) {
            button = <PlayArrowIcon />
        }
        else {
            button = <PauseIcon />
        }
        return (
            <div className="timer-container">
                <h1>{timer}</h1><button className="play-pause" onClick={this.playPauseTimer}>{button}</button>
            </div>
        )
    }



    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
}

function formatTimerHTML(timerInSeconds) {
    var seconds = timerInSeconds % 60;
    var min = Math.floor(timerInSeconds / 60);
    if (seconds < 10) {
        seconds = `0${seconds.toString()}`
    }
    if (min < 10) {
        min = `0${min.toString()}`
    }
    return `${min}:${seconds}`
}

export default Timer