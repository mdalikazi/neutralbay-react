'use strict';

var React = require('react/addons');
var Carousel = require('./carousel');
var Description = require('./description');
var Footer = require('./footer');
// CSS
require('normalize.css');
require('../styles/main.css');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <div className="text-center">
          <Carousel />
        </div>
        <br />
        <Description />
        <Footer />
      </div>
    );
  }
});
