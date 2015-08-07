'use strict';

var React = require('react');
var link = "https://www.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=300&amp;wkst=1&amp;hl=en_GB&amp;bgcolor=%23990000&amp;ctz=Australia%2FSydney";

module.exports = React.createClass({
  render: function(){
    return (
      <div className="calendar-outer">
        <iframe src={link} width="300" height="300" frameBorder="0" scrolling="no">
        </iframe>
      </div>
    );
  }
});
