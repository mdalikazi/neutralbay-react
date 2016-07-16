'use strict';

var React = require('react');
var Bootstrap = require('react-bootstrap');
var {Glyphicon} = Bootstrap;

module.exports = React.createClass({
  render: function(){
    return (
      <div className="footer text-center">
        <span><Glyphicon glyph='copyright-mark' /></span> 2015 Neutral Bay Community Centre. Prices subject to change. Site designed and maintained by Ali Kazi.
      </div>
    );
  }
});
