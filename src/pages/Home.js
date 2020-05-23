import React, { Component } from 'react';
import Slider from '../components/Slider/Slider';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';


class Home extends Component {
    render() {
        const linkStyle = {
            fontWeight: '700',
            textDecoration: 'none'
        };

        return(
            <div>
                <Slider />

                <Container>
                    <Row className="heading pt-5 pb-3">
                        <Col className="pr-5" sm={8}>
                            <h2>Movies at Encore</h2>
                        </Col>
                        <Col className="pl-5" sm={4}>
                            <Button className="text-dark mr-1" variant="outline-light" style={linkStyle}>Now Playing</Button>
                            <Button className="text-dark" variant="outline-light" style={linkStyle}>Coming Soon</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card>
                                <Card.Img src="https://vignette.wikia.nocookie.net/badboysfranchise/images/9/90/Bad_Boys_for_Life_poster.jpg/revision/latest?cb=20191002220229"></Card.Img>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img src="https://upload.wikimedia.org/wikipedia/en/8/88/ItChapterTwoTeaser.jpg"></Card.Img>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img src="https://vignette.wikia.nocookie.net/jumanji/images/1/1b/Jumanji_2017_Poster.jpg/revision/latest?cb=20181023182751"></Card.Img>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img src="https://images-na.ssl-images-amazon.com/images/I/71QEq--8H-L._AC_SY606_.jpg"></Card.Img>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        ); 
    }
}

export default Home;