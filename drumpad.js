import React, { Component } from "react";
import bankOne from "./data.js";

class Drumpad extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('click', this.handleClick);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    document.addEventListener('click', this.handleClick);
  }
  
  handleKeyPress = e => {
    bankOne.map(elm => {
      if (e.keyCode === elm.keyCode) {
        const keyDown = document.getElementById(elm.id+'-Btn');
        this.props.playSound(elm.keyTrigger, elm.tl);
        keyDown.classList.add('active')
        setTimeout(() => keyDown.classList.remove('active'), 200)
      }
    })
  }
  
  handleClick = e => {
    bankOne.map(elm => {
      if (e.target.parentElement.id === elm.id) {
        this.props.playSound(elm.keyTrigger, elm.tl);
      }
    })
  }

  render() {
    const {playSound} = this.props;
    const drums = bankOne.map(elm => {
      return (
         <div 
          key={elm.id}
          id={elm.id + '-Btn'} 
          className="drum-pad"
          onClick={() => playSound(elm.keyTrigger, elm.tl)}
        >
          {elm.keyTrigger}
          <audio className="clip" id={elm.keyTrigger} src={elm.url} type="audio/mp3"/>
        </div>
      )
    });
    
    return (
      <div id="Drums-Btns" className="hide">
        {drums}
      </div>
    )
  }
  
}

export default Drumpad;
