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
    const buttonClass = this.props.bonbonFound ? "deep-purple darken-4":"cyan accent-1"
    const buttonText = this.props.bonbonFound ? "-" : "+"

    const allergènes = allergens ? allergens : "Il n'y a pas d'allergènes pour ce produit"

    return (
      
      <Col xs="12" className="mb-3">
        <div className="wrapper">
          <div className="img-wrapper" onClick={() => this.toggle(id)}>
            <img src={image_front_small_url} />
          </div>
          <div className="title-wrapper px-3" onClick={() => this.toggle(id)}>
            <h5 className="texte-left my-auto">{product_name}</h5>
          </div>
          <div className="button-wrapper">
            <Button onClick = {() => this.props.handleClick(this.props.bonbon)} className="p-1 px-4 m-0 border-0" color={buttonClass} rounded>{buttonText}</Button>
          </div>
        </div>
        <Modal className="d-flex justify-content-center" isOpen={this.state.isOpen} size="lg" lg position="top" centered>
          <ModalHeader toggle={this.toggle} >{product_name}</ModalHeader>
          <ModalBody className="text-center">
               <img className="" src={image_front_small_url} /> 
               <p className="mt-3">Liste des alergènes: {allergènes} </p>
               <div className="button-wrapper">
            <Button onClick = {() => this.props.handleClick(this.props.bonbon)} className="p-1 px-4 m-0 border-0" color={buttonClass} rounded>{buttonText}</Button>
          </div>
          </ModalBody>
       </Modal>      
      </Col>
    )
  }
}

export default BonbonCard;
