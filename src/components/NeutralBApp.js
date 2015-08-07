'use strict';

var React = require('react/addons');
var Bootstrap = require('react-bootstrap');
var Navbar = require('./navbar');
var Carousel = require('./carousel');
var Weather = require('./weather-widget');
var Description = require('./description');
var Footer = require('./footer');
var {Grid, Row, Col} = Bootstrap;
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
          </h1>
          <h3>Senior Citizens Club</h3>
          </div>
          <hr />
        </div>
        <Navbar />
        <Grid>
          <Row>
            <Col xs={6} md={4} mdPush={2}><Carousel /></Col>
            <Col xs={1} md={2} mdPush={6}><Weather /></Col>
          </Row>
        </Grid>
        <br />
        <Description />
        <Footer />
      </div>
    );
  }
});

module.exports = NeutralBApp;
