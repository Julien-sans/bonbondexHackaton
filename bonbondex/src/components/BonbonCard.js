import React, { Component } from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardImage, CardTitle, Modal, ModalBody, ModalHeader } from 'mdbreact';
class BonbonCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
       this.setState({
         isOpen: !this.state.isOpen
       });
   }

  render() {
    const { product_name, image_front_small_url, id, allergens } = this.props.bonbon;
    const buttonClass = this.props.bonbonFound ? "danger":"success"
    const buttonText = this.props.bonbonFound ? "Supprimer" : "Ajouter"
    let modalNumber = 'modal' + id
    return (
      <Col lg="4" md="6" xs="12">
        <Card className="mt-3"  style={{height: "300px", cursor: "pointer"}}>
          <CardImage className="img-fluid w-100" src={image_front_small_url}  />
          <CardBody className="p-2" style={{fontSize: "1.2em"}}>
            <CardTitle onClick={() => this.toggle(id)}>{product_name}</CardTitle>
            <Button onClick = {() => this.props.handleClick(this.props.bonbon)} color={buttonClass} rounded>{buttonText}</Button>
          </CardBody>
        </Card>
        <Modal isOpen={this.state.isOpen} size="lg" lg position="top">
          <ModalHeader toggle={this.toggle}></ModalHeader>
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
  }
}

export default BonbonCard;
