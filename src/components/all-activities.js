'use strict';

var React = require('react');
var Footer = require('./footer');

module.exports = React.createClass({
  render: function(){
    return (
      <div>
        <div className="description animated fadeInUp">
          <p>
          <h1 className="welcome">Internet Access</h1>
            Check your emails, browse the Internet or use any of our computers in our friendly internet cafe, while enjoying a cup of coffee. Only $2 per hour or $1 for half an hour.
            Print in colour or black and white for only 10 cents a page.
          </p>
          <p>
          <h1 className="welcome">Dancing Lessons</h1>
            <b>Vogue Dancing:</b>  Fridays 11:00 am to 3:00 pm, 1st Floor<br />
            <b>Line dancing:</b>  Mondays 6:30 pm - 8:00 pm and Thursdays 9:30 am - 11:00 am<br />
            Privately run by Gordon Elliott. <br/>Contact: 0411500511, dancewithgordon@yahoo.com.au<br />
          </p>
        </div>
        <Footer />
      </div>
    );
  }
});
