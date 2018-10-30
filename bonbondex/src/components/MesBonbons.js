import React, { Component } from 'react';
import { Container, Row, Button, Fa } from 'mdbreact';
import '../style/MesBonbons.scss';

class MesBonbons extends Component {
    render() {
        return (
            <div>
                <Container fluid id="mes-bonbons">
                    <Row className="d-flex justify-content-center">
                        <Button size="md" color="warning" rounded>Tout <Fa icon="list" className="ml-1" /></Button>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MesBonbons;
