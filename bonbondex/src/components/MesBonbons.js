import React, { Component } from 'react';
import { Container, Row, Button, Fa } from 'mdbreact';
import '../style/MesBonbons.scss';
import BonbonCard from './BonbonCard';

class MesBonbons extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: [],
      count: 0
    }
  }

  componentDidMount() {
    localStorage.getItem('list') &&
    this.setState({
      list: JSON.parse(localStorage.getItem('list')),
    })
  }

  handleClick = bonbonRemoved => {
    const bonbonsKept = this.state.list.filter((bonbon) => bonbon.id !== bonbonRemoved.id)
    localStorage.setItem('list', JSON.stringify(bonbonsKept));
    this.setState({
      list: bonbonsKept
    })
  }

  incrementCounter = () => {
    let count = this.state.count
    this.setState({
      count: this.props.list.length
    })
  }

  render() {
    let counter = this.state.list.length
    return (
      <div>
        <Container fluid id="mes-bonbons">
          <Row>
            <div className="compteurVictimes text-danger mx-auto d-flex flex-column pb-5 pt-5">
              <div className="mx-auto">{counter}</div>
              <div>VICTIMES</div>
            </div>

          </Row>
          <Row className="d-flex justify-content-center">
            <Button size="md" color="warning" rounded>Tout <Fa icon="list" className="ml-1" /></Button>
          </Row>

          <Row>
            {
              this.state.list.map((bonbon, key) =>
              {
                return <BonbonCard bonbonFound={true} key={key} handleClick={this.handleClick} bonbon={bonbon} onChange={this.incrementCounter.bind(this)}/>
              })
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default MesBonbons;
