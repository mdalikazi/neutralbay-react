var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
      <span>
        <iframe
        className="weather-frame animated fadeInRight"
        src="http://cdnres.willyweather.com.au/widget/loadView.html?id=25738"
        width="207"
        height="228"
        frameBorder="0"
        scrolling="no">
        </iframe>
      </span>
    );
  }
});
