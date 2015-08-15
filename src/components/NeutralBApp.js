'use strict';

var React = require('react/addons');
var Navbar = require('./navbar');
var Carousel = require('./carousel');
var Weather = require('./weather-widget');
var Description = require('./description');
var Footer = require('./footer');
// CSS
require('normalize.css');
require('../styles/main.css');

var NeutralBApp = React.createClass({
  render: function() {
    return (
      <div>
        <div className="header">
          <br />
          <div className="text-center animated fadeIn">
          <h1>
            Neutral Bay Community Centre
            <h3>Senior Citizens Club</h3>
          </h1>

          </div>
          <Weather />
        </div>
        <hr className="header-hr"/>
        <Navbar />
        <hr className="fadedHr" />
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

module.exports = NeutralBApp;
