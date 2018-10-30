import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardImage, CardTitle, CardFooter, Modal, ModalBody, ModalHeader, Fa } from 'mdbreact';
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
                <Container id="home-page">
                    <Row >
                        {
                            this.props.listeBonbons.filter(bonbon => bonbon.image_front_small_url!=='').map((bonbon, key) => {
                                const { product_name, image_front_small_url, id, allergens } = bonbon;
                                let modalNumber = 'modal' + id
                                const allergènes = allergens ? allergens : "Il n'y a pas d'allergènes pour ce produit"

                                return(
                                    <Col key={key} lg="4" md="6" xs="6" >
                                        <Card className="card mt-3"  style={{height: "300px"}}>
                                            <CardImage className="img-fluid w-100" src={image_front_small_url}  />
                                            <CardBody className="p-2 "  >
                                                <CardTitle onClick={() => this.toggle(id)} className="d-flex justify-content-center" style={{fontSize: "1em"}}>{product_name}</CardTitle>
                                            </CardBody>
                                            <CardFooter >
                                                <div className="d-flex justify-content-center">
                                                    <Button size="md" color="warning" rounded><Fa icon="list" /></Button>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                        <Modal isOpen={this.state[modalNumber]} size="lg" lg position="top">
                                            <ModalHeader toggle={() => this.toggle(id)}>{product_name}</ModalHeader>
                                            <ModalBody className="text-center">
                                                <img className="w-100" src={image_front_small_url} /> 
                                                <div className="mt-3">Liste des alergènes: {allergènes} </div>
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
