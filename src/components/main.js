'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;
var RouteHandler = ReactRouter.RouteHandler;
var Navbar = require('./navbar');
var Weather = require('./weather-widget');
var Home = require('./home');
var Lessons = require('./lessons');
var All = require('./all-activities');

var content = document.getElementById('content');

var App = React.createClass({
  render: function(){
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
        <RouteHandler />
      </div>
    );
  }
});

var Routes = (
  <Route name="app" path="/" handler={App}>
   <DefaultRoute handler={Home} />
    <Route name="lessons" path="/lessons" handler={Lessons} />
    <Route name="all" path="/all-activities" handler={All} />
  </Route>
);

ReactRouter.run(Routes, ReactRouter.HistoryLocation, function (Handler) {
  React.render(<Handler />, content);
});
