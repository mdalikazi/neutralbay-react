'use strict';

var React = require('react');
var Bootstrap = require('react-bootstrap');
var {ButtonToolbar, Button} = Bootstrap;

module.exports = React.createClass({
  render: function(){
    return (
      <div className="text-center">
        <ButtonToolbar>
          <Button className="no-border">Home</Button>
          <Button className="no-border">Computer Lessons</Button>
          <Button className="no-border">Other Activities</Button>
          <Button className="no-border">Events</Button>
          <Button className="no-border">Volunteers</Button>
          <Button className="no-border">Contact Us</Button>
        </ButtonToolbar>
        <hr className="sexy" />
      </div>
    );
  }
});
