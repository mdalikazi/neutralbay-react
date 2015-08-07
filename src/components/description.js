'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="description animated fadeInUp">
        <p>
        <h1 className="welcome">Welcome</h1>
          <span className="first-letter">N</span>
          eutral Bay Community Centre is in the heart of Neutral Bay Junction on Military Road, near the intersection of Wycombe Road. <br />
          We'd love for you to drop in. The room is cosy and bright so why not come in while waiting for your bus. Have a friendly chat, sit in the sun, read today's paper, browse our library and enjoy a cup of refreshing tea/coffee and a biscuit.<br /><br />
          Check out all our activities: computer lessons, bus trips, internet, digital photos, scrabble, dance lessons, Japanese Computer Club, exercise classes, Tai Chi, classic films and more!
          We are open from 9.30am - 2.30pm Monday to Friday.  The centre is run by volunteers and opening times are flexible.
          Join us and bring a friend. Anyone can drop in and be refreshed with tea, coffee and biscuits, $2 for members. Membership is only $10.00 per year.<br /><br />
          All Volunteers are here to help you!<br /><br />
          Hope to see you soon,<br />
          Pauline, Phyllis, & Chris
        </p>
        <img src='../images/friendship.png' />
      </div>
    );
  }
});
