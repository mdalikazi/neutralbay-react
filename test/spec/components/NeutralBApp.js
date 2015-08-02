'use strict';

describe('NeutralBApp', () => {
  let React = require('react/addons');
  let NeutralBApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    NeutralBApp = require('components/NeutralBApp.js');
    component = React.createElement(NeutralBApp);
  });

  it('should create a new instance of NeutralBApp', () => {
    expect(component).toBeDefined();
  });
});
