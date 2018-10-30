import React, { Component } from 'react';
import { Col, Button, Card, CardBody, CardImage, CardTitle, CardFooter, Modal, ModalBody, ModalHeader } from 'mdbreact';
import '../style/BonbonCard.scss';
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
    const buttonClass = this.props.bonbonFound ? "danger":"elegant"
    const buttonText = this.props.bonbonFound ? "Supprimer" : "Ajouter"

    const allergènes = allergens ? allergens : "Il n'y a pas d'allergènes pour ce produit"

    return (
      <Col lg="4" md="6" xs="6">
        <Card className="mt-3" style={{height: "350px", fontSize: "1em"}}>
          <CardImage  className="img-fluid w-100" src={image_front_small_url}  />
          <CardBody className="text-center">
            <CardTitle onClick={() => this.toggle(id)}>{product_name}</CardTitle>
          </CardBody>
          <CardFooter>
              <div className="d-flex justify-content-center">
              <Button onClick = {() => this.props.handleClick(this.props.bonbon)} className="p-2" color={buttonClass} rounded>{buttonText}</Button>
              </div>
          </CardFooter>
        </Card>
        <Modal isOpen={this.state.isOpen} size="lg" lg position="top">
          <ModalHeader toggle={this.toggle}>{product_name}</ModalHeader>
            <ModalBody className="text-center">
                <img className="w-100" src={image_front_small_url} /> 
                <p className="mt-3">Liste des alergènes: {allergènes} </p>
            </ModalBody>
        </Modal>
      </Col>
    )
  }
}

export default BonbonCard;
