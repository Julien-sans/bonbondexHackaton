import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardImage, CardTitle, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import  '../data/liste_bonbons';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        }
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
    render() {
  
        return (
            <Fragment>
                <Container >
                    <Row >
                        {
                            this.props.listeBonbons.map((bonbon, key) => {
                                const { product_name, image_front_small_url } = bonbon;
                                return(
                                    <Col lg="4" md="6" xs="12">
                                        <Card className="mt-3" onClick={this.toggle.bind(this)}>
                                            <CardImage onClick={this.toggle.bind(this)} className="img-fluid w-100 " src={image_front_small_url} />
                                            <CardBody className="p-2" style={{fontSize: "1.2em"}}>
                                                <CardTitle >{product_name}</CardTitle>
                                            </CardBody>
                                        </Card>
                                        <Modal isOpen={this.state.modal} toggle={this.toggle} size="fluid" full-height position="bottom">
                                            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                            <ModalBody>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button color="secondary" onClick={this.toggle}>Close</Button>
                                                <Button color="primary">Save changes</Button>
                                            </ModalFooter>
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