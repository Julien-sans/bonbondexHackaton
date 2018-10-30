import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardImage, CardTitle, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import  '../data/liste_bonbons';
import '../style/Home.scss';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal4601798030055: false
        }
    }

    toggle(nr) {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
    }

    render() {

        return (
            <Fragment>
                <Container >
                    <Row >
                        {
                            this.props.listeBonbons.map((bonbon, key) => {
                                const { product_name, image_front_small_url, id, allergens } = bonbon;
                                let modalNumber = 'modal' + id
                                return(
                                    <Col key={key} lg="4" md="6" xs="12">
                                        <Card className="mt-3" onClick={() => this.toggle(id)} style={{height: "300px", cursor: "pointer"}}>
                                            <CardImage className="img-fluid w-100" src={image_front_small_url}  />
                                            <CardBody className="p-2" style={{fontSize: "1.2em"}}>
                                                <CardTitle >{product_name}</CardTitle>
                                            </CardBody>
                                        </Card>
                                        <Modal isOpen={this.state[modalNumber]} size="lg" lg position="top">
                                            <ModalHeader toggle={() => this.toggle(id)}></ModalHeader>
                                            <ModalBody>
                                                <Container>
                                                    <Row>
                                                        <Col xs="12">
                                                            <img className="img-fluid" src={image_front_small_url} /> 
                                                        </Col>
                                                        <Col xs="12" >
                                                            <h2>{product_name}</h2>
                                                            <p>Liste des alergènes: {allergens}</p>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </ModalBody>
                                        </Modal>
                                        
                                    </Col>

                                )
                            })
                        }
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Home;
