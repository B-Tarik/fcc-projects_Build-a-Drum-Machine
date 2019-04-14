import React, { Component } from "react";
import Drumpad from "./drumpad";
import './drumApp.scss';

class DrumApp extends React.Component {
  state = {
    text: 'Text here',
    keyboard: false
  }

  playSound = (key, tl) => {
    const sound = document.getElementById(key);
    sound.currentTime = 0;
    sound.play()
    this.animate(tl)
    this.setState({text: key})
  }
  
  animate = tl => {
    tl.restart()
	  tl.play();
  }
  
  keyboard = () => {
    const btns = document.getElementById('Drums-Btns')
    if(this.state.keyboard) btns.classList.add('hide')
    else btns.classList.remove('hide')
    this.setState({keyboard: !this.state.keyboard})
  }
  
  render() {
    const {text} = this.state; 
    
    return (
     <div id="drum-machine" className="inner-container">
        <div className="controls-container">
          <p id="display">
            {text}
          </p>		
        </div>
        <Drumpad playSound={this.playSound} />
        <div className="keyboard">
          <i 
            className="fas fa-keyboard"
            onClick={this.keyboard}
            ></i>
        </div>
      </div>
    )
  }
}

export default DrumApp;
