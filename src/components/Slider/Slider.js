import React from 'react';
import { Jumbotron, Container, Carousel, Button } from 'react-bootstrap';
import './Slider.css';

function Slider() {
    return (
        <Carousel id="carousel">
            <Carousel.Item className="carousel-item">
                <img
                    className="d-block w-100"
                    src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fdisney-aladdin-2019-movie-poster_63229_2581x1452.jpg&f=1&nofb=1"
                    alt="Slide 1"
                />
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>Add additional info here</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2019%2F12%2FBarley-and-Ian-in-Pixars-Onward.jpg&f=1&nofb=1"
                    alt="Slide 2"
                />
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>Add additional info here</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fjoaquin-phoenix-as-joker_64166_2560x1440.jpg&f=1&nofb=1"
                    alt="Slide 3"
                />
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>Add additional info here</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpapers.in%2Fdownload%2Fstar_wars_the_rise_of_skywalker_2019_5k-HD.jpg&f=1&nofb=1"
                    alt="Slide 4"
                />
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>Add additional info here</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;