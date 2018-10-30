import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardImage, CardTitle, CardFooter, Modal, ModalBody, ModalHeader, Fa } from 'mdbreact';
import  '../data/liste_bonbons';
import '../style/Home.scss';
import BonbonCard from './BonbonCard';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal4601798030055: false,
      list: [],
      newItem: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    localStorage.getItem('list') &&
    this.setState({
      list: JSON.parse(localStorage.getItem('list')),
    })
  }

  addItem = event => {
    event.preventDefault();
  }

  handleClick = bonbon => {
    const { list } = this.state;
    const newList = [...list, bonbon]
    localStorage.setItem('list', JSON.stringify(newList));
    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <Fragment>
        <Container >
          <Row >
            {
              this.props.listeBonbons.map((bonbon, key) =>
              {
                const bonbonInList = this.state.list.find((bonbonFound) => bonbon.id === bonbonFound.id)
                const bonbonFound = bonbonInList !== undefined
                return <BonbonCard bonbonFound={bonbonFound} key={key} handleClick={this.handleClick} bonbon={bonbon}/>
              } )
            }
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Home;
