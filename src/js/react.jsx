const React = require('react');
const ReactDOM = require('react-dom');

var Page = React.createClass({
  getTextStyle: function() {
      return {
        textAlign: "center"
      }
  },

  getImageSelection: function() {
    var images = [
      "./images/rainy_day.gif",
      "./images/sunset.gif",
      "./images/coding.gif",
      "./images/servers.gif",
      "./images/waiting.gif",
      "./images/fireflies.gif"
    ];
    var selection = Math.floor(Math.random() * (images.length));
    return images[selection];
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
