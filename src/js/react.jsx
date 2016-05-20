const React = require('react');
const ReactDOM = require('react-dom');

var Page = React.createClass({
  getTextStyle: function() {
      return {
        textAlign: "center"
      }
  },

  getImageSelection: function() {
    var url_path = "./images/";
    var images = [
      "rainy_day.gif",
      "sunset.gif",
      "coding.gif",
      "servers.gif",
      "waiting.gif",
      "fireflies.gif"
    ];
    var selection = Math.floor(Math.random() * (images.length));
    return url_path + images[selection];
  },

  render: function() {
    var textStyle = this.getTextStyle();
    var imageSelection = this.getImageSelection();

    return (
      <div className="container come-back-later">
        <img src={imageSelection}></img>
        <div className="container center-text">
          <h1 style={textStyle}>Work in Progress</h1>
          <span>
            <a href="http://twitter.com/ryapauley"
               className="left-text">@ryapauley</a>
            <a href="mailto:info@ryanpauley.com?Subject=In%20yer%20base%20killin%20yer%20doods">
              info@ryapauley.com</a>
            <a href="http://github.com/mendokusai"
               className="right-text">mendokusai</a> (gh)
         </span>
       </div>
      </div>
    );
  }
});

ReactDOM.render(<Page />, document.getElementById('attachment'));
