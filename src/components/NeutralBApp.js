'use strict';

var React = require('react/addons');
var Navbar = require('./navbar');

// CSS
require('normalize.css');
require('../styles/main.css');

var NeutralBApp = React.createClass({
  render: function() {
    return (
      <div>
        <div className="text-center header">
          <img src="../images/logo.jpg" className="logo" />
          <h1>Neutral Bay Community Centre</h1>
          <hr />
        </div>
        <Navbar />
      </div>
    );
  }
});

module.exports = NeutralBApp;
