'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Bootstrap = require('react-bootstrap');
var {ButtonToolbar, Button} = Bootstrap;

module.exports = React.createClass({
  render: function(){
    return (
      <div className="buttons text-center animated fadeInDown">
        <ButtonToolbar>
          <Link to='/'><Button className="no-border">Home</Button></Link>
          <span className="divider" />
          <Link to='lessons'><Button className="no-border">Computer Lessons</Button></Link>
          <span className="divider" />
          <Link to='all'><Button className="no-border">All Activities</Button></Link>
          <span className="divider" />
          <Button className="no-border">Events</Button>
          <span className="divider" />
          <Button className="no-border">Volunteers</Button>
          <span className="divider" />
          <Button className="no-border">Contact Us</Button>
        </ButtonToolbar>
      </div>
    );
  }
});
