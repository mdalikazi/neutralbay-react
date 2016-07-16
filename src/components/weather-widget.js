var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
        <iframe
        className="weather-frame animated fadeInRight"
        src="http://cdnres.willyweather.com.au/widget/loadView.html?id=26070"
        width="199"
        height="62"
        frameBorder="0"
        scrolling="no">
        </iframe>
    );
  }
});
