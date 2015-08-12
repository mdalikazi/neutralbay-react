'use strict';

var React = require('react');
var Bootstrap = require('react-bootstrap');
var {Carousel, CarouselItem} = Bootstrap;

module.exports = React.createClass({
  render: function(){
    return (
        <Carousel className="carousel animated zoomIn" pauseOnHover={true} interval={5000}>
          <CarouselItem className="carousel-inner">
            <img alt='Loading...' src='../images/slide1.jpg'/>
          </CarouselItem>
          <CarouselItem className="carousel-inner">
            <img alt='Loading...' src='../images/slide2.jpg'/>
          </CarouselItem>
          <CarouselItem className="carousel-inner">
            <img alt='Loading...' src='../images/slide3.jpg'/>
          </CarouselItem>
        </Carousel>
    );
  }
});
