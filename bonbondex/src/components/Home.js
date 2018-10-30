import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, CardBody, CardImage, CardTitle } from 'mdbreact';
import  '../data/liste_bonbons';


class Home extends Component {
    render() {
        return (
            <Fragment>
                <Container >
                    <Row >
                        <Col lg="4" md="6" xs="6">
                            <Card className="mt-3">
                                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                                <CardBody>
                                    <CardTitle>Nom du bonbon</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4" md="6" xs="6">
                            <Card className="mt-3">
                                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                                <CardBody>
                                    <CardTitle>Nom du bonbon</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4" md="6" xs="6">
                            <Card className="mt-3">
                                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                                <CardBody>
                                    <CardTitle>Nom du bonbon</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Home;