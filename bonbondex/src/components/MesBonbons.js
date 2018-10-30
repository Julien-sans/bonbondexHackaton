import React, { Component } from 'react';
import { Container, Row, Button, Fa } from 'mdbreact';

class MesBonbons extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row className="d-flex justify-content-center">
                        <Button size="md" color="warning" rounded>Tout <Fa icon="list" className="ml-1" /></Button>
                        <Button size="md" color="warning" rounded>Miam <Fa icon="heart" className="ml-1" /></Button>
                        <Button size="md" color="warning" rounded>Beurk <Fa icon="bug" className="ml-1" /></Button>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MesBonbons;