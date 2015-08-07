var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="weather-div">
        <iframe
        className="weather-frame animated fadeInRight"
        src="http://cdnres.willyweather.com.au/widget/loadView.html?id=25738"
        width="207"
        height="228"
        frameBorder="0"
        scrolling="no">
        </iframe>
        <a
        className="weather-link"
        href="http://www.willyweather.com.au/nsw/sydney/neutral-bay.html">
        Weather report Neutral Bay
        </a>
      </div>
    );
  }
});
