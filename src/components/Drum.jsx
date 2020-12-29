import React, {Component} from 'react'
import DrummerImage from './DrummerImage'

class Drum extends Component {
    constructor(props) {
        super(props);

        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.keyboardLetter = this.keyboardLetter.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        let audioID = event.currentTarget.children[event.currentTarget.children.length -1];
        console.log(event.target.getAttribute("id"))

        return this.keyboardLetter(audioID.id)
    }

    keyboardLetter(letter) {
        console.log('pressed ' + letter)
        let audio = document.getElementById(letter);
        audio.play();
    }

    handleKeyPress(event) {
        switch (event.keyCode) {
            case 65:
                this.keyboardLetter('A')
                break;
            case 67:
                this.keyboardLetter('C')
                break;
            case 68:
                this.keyboardLetter('D')
                break;
            case 69:
                this.keyboardLetter('E')
                break;
            case 81:
                this.keyboardLetter('Q')
                break;
            case 83:
                this.keyboardLetter('S')
                break;
            case 87:
                this.keyboardLetter('W')
                break;
            case 88:
                this.keyboardLetter('X')
                break;
            case 90:
                this.keyboardLetter('Z')
                break;
            default:
                console.log('Key not Allowed')
                break;
        }
    }



    render() {
        return (<div>
            <h1>Welcome to Drum machine</h1>
            <DrummerImage/>
            <div id="drum-machine">
                <button id="heater-1" className="drum-pad" onClick={this.handleClick} onKeyDown={this.handleKeyPress}>
                    <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>Q</button>
                <button id="heater-2" className="drum-pad" onClick={this.handleClick} onKeyDown={this.handleKeyPress}>
                    <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>W</button>
                <button id="heater-3" className="drum-pad" onClick={this.handleClick} onKeyDown={this.handleKeyPress}>
                    <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>E</button>
                <button id="light" className="drum-pad" onClick={this.handleClick} onKeyDown={this.handleKeyPress}>
                    <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"></audio>A</button>
                <button id="stick" className="drum-pad" onClick={this.handleClick} onKeyDown={this.handleKeyPress}>
                    <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"></audio>S</button>
                <button id="drum-plate-1" className="drum-pad" onClick={this.handleClick} onKeyDown={this.handleKeyPress}>
                    <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"></audio>D</button>
                <button id="drum-plate-2" className="drum-pad" onClick={this.handleClick} onKeyDown={this.handleKeyPress}>
                    <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"></audio>Z</button>
                <button id="punchy-drum" className="drum-pad" onClick={this.handleClick} onKeyDown={this.handleKeyPress}>
                    <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"></audio>X</button>
                <button id="fast-kick" className="drum-pad" onClick={this.handleClick} onKeyDown={this.handleKeyPress}>
                    <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>C</button>
            </div>
            <div id="display">onClick = {document.getElementsByClassName('drum-pad')}</div>

        </div>)
    }
}

export default Drum
