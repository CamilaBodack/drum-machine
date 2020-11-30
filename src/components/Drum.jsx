import React, { Component } from 'react'
import DrummerImage from './DrummerImage'


class Drum extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <h1>Welcome to Drum machine</h1>
            <DrummerImage />
            <div id="drum-machine">
            <div id="display"></div>
            <div className = "drum-pad" id="Q"><audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/8[kb]80s-Bdrum1.aif"></audio>Q</div>
            <div className = "drum-pad" id="W"><audio src=""></audio>W</div>
            <div className = "drum-pad" id="E"><audio src=""></audio>E</div>
            <div className = "drum-pad" id="A"><audio src=""></audio>A</div>
            <div className = "drum-pad" id="S"><audio src=""></audio>S</div>
            <div className = "drum-pad" id="D"><audio src=""></audio>D</div>
            <div className = "drum-pad" id="Z"><audio src=""></audio>Z</div>
            <div className = "drum-pad" id="X"><audio src=""></audio>X</div>
            <div className = "drum-pad" id="C"><audio src=""></audio>C</div>
            </div>
        </div>
        )
    }
}

export default Drum
