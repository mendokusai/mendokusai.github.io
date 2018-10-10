import React, {Component} from 'react'
import Typist from 'react-typist'
import ReactDOM from 'react-dom'

const Page = React.createClass({

  getTextStyle() {
      return {
        textAlign: "center"
      }
  },

  getImageSelection() {
    let url_path = "./public/images/";
    const images = [
      "rainy_day.gif",
      "sunset.gif",
      "coding.gif",
      "servers.gif",
      "waiting.gif",
      "fireflies.gif"
    ];
    let selection = Math.floor(Math.random() * (images.length));
    return url_path + images[selection];
  },

  render() {
    let textStyle = this.getTextStyle();
    let imageSelection = this.getImageSelection();
    let textCursor = {
      blink: true,
      element: '🗿',
      hideWhenDone: false
    }
    let cursorTwo = {
      blink: true,
      element: '_',
      hideWhenDone: true
    }
    return (
      <div className="container the-business">
        <div className="container center-text">
          <img src={imageSelection}></img>
          <Typist className="text"
                  cursor={textCursor}
                  startDelay={0}
                  avgTypingDelay={80}
                  stdTypingDelay={40}>
            <h1 style={textStyle}>🍍 Ryan Pauley 🍍</h1>
            <h2>-Internet::Applications-</h2>
            <span>
              <a href="http://twitter.com/ryapauley"
                 className="left-text">@ryapauley</a>
              <a href="mailto:info@ryanpauley.com?Subject=In%20yer%20base%20killin%20yer%20doods">
                info@ryapauley.com</a>
              <a href="http://github.com/mendokusai"
                 className="right-text">mendokusai</a>
               <p> </p>
             </span>
          </Typist>
        </div>
       </div>
    );
  }
});

ReactDOM.render(<Page />, document.getElementById('attachment'));
