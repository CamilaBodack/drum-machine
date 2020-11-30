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
            <div id="drum-machine"></div>
            </div>
        )
    }
}

export default Drum
