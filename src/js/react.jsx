const React = require('react');
const ReactDOM = require('react-dom');

var Page = React.createClass({
  getTextStyle: function() {
      return {
        textAlign: "center"
      }
  },

  getImageSelection: function() {
    var url_path = "./public/images/"
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
        <h1 style={textStyle}>Work in Progress</h1>
      </div>
    );
  }
});

ReactDOM.render(<Page />, document.getElementById('attachment'));
