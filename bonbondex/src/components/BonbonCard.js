import React, { Component } from 'react';
import { Col, Button, Modal, ModalBody, ModalHeader } from 'mdbreact';
import '../style/BonbonCard.scss';

import { ToastContainer, ToastStore } from 'react-toasts';

class BonbonCard extends Component {

  constructor(props) {
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
    const buttonClass = this.props.bonbonFound ? "deep-purple darken-4" : "cyan accent-1"
    const buttonText = this.props.bonbonFound ? "-" : "+"
    const allergènes = allergens ? allergens : "Il n'y a pas d'allergènes pour ce produit"

    return (

      <Col lg="4" md="6" xs="12" className="mb-3 container">
        <div className="wrapper">
          <div className="img-wrapper" onClick={() => this.toggle(id)}>
            <img src={image_front_small_url} />
          </div>
          <div className="title-wrapper px-3" onClick={() => this.toggle(id)}>
            <h5 className="text-left my-auto">{product_name.normalize('NFD').replace(/[\u0300-\u036f]/g, "")}</h5>
          </div>

          <div className="button-wrapper">
            {
              buttonText === "+"
                ? <Button onClick={() => { this.props.handleClick(this.props.bonbon); ToastStore.info("+1 victime", 1000) }} className=" p-0 m-0 border-0" color={buttonClass} rounded>{buttonText}</Button>
                : <Button onClick={() => { this.props.handleClick(this.props.bonbon); ToastStore.info("-1 victime", 1000) }} className=" p-0 m-0 border-0" color={buttonClass} rounded>{buttonText}</Button>
            }
            <ToastContainer store={ToastStore} position={ToastContainer.POSITION.BOTTOM_LEFT} />
          </div>
        </div>
        <Modal className="d-flex justify-content-center" isOpen={this.state.isOpen} size="lg" lg position="top" centered>
          <ModalHeader toggle={this.toggle} >{product_name.normalize('NFD').replace(/[\u0300-\u036f]/g, "")}</ModalHeader>
          <ModalBody className="text-center">
            <img className="" src={image_front_small_url} />
            <p className="mt-3">{"alergènes".normalize('NFD').replace(/[\u0300-\u036f]/g, "")}: {allergènes.normalize('NFD').replace(/[\u0300-\u036f]/g, "")} </p>
            <div className="button-wrapper">
              {
                buttonText === "+"
                  ? <Button onClick={() => { this.props.handleClick(this.props.bonbon); ToastStore.info("+1 victime") }} className="p-2 px-4 m-0 border-0" color={buttonClass} rounded>{buttonText}</Button>
                  : <Button onClick={() => { this.props.handleClick(this.props.bonbon); ToastStore.info("-1 victime") }} className="p-2 px-4 m-0 border-0" color={buttonClass} rounded>{buttonText}</Button>
              }
              <ToastContainer store={ToastStore} position={ToastContainer.POSITION.BOTTOM_LEFT} />
            </div>
          </ModalBody>
        </Modal>
      </Col>
    )
  }
}

export default BonbonCard;
