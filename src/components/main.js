'use strict';

var NeutralBApp = require('./NeutralBApp');
var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={NeutralBApp}>
    <Route name="/" handler={NeutralBApp}/>
  </Route>
);

ReactRouter.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
