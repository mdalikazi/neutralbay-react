'use strict';

var React = require('react');
var Footer = require('./footer');

module.exports = React.createClass({
  render: function(){
    return (
      <div>
        <div className="description animated fadeInUp">
          <p>
          <h1 className="welcome">Computer Lessons</h1>
            On Monday and Thursday our friendly and competent volunteers provide one-on-one lessons on Apple, Macintosh, Windows computers, iPad & Android tablets and smartphones.<br /><br />
            Contact the centre and speak to Pauline to put your name down for your own tutor, or just come in on a Monday or Thursday to speak with us.<br /><br />
            Bring your own laptop or device, or use a computer provided at the centre. Whatever your level of experience, we can help!<br /><br />
            Six 1 hour lessons for only $50 - this value is normally not refundable or $15 for one-off 1 hour lesson.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
});
