import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
  Container, Row, Card, CardImg, CardText, CardBody,
  CardTitle,
  Col,
  Button,
} from 'reactstrap';
import '../components/CardFilm.scss';
import { dataResults } from '../actions/search';
import './AfficheFilm.scss';

class AfficheFilm extends Component {
  componentDidMount() {
    const { dataResults } = this.props;
    dataResults('http://localhost:5000/api/films');
  }

  render() {
    const { listFilms } = this.props;
    console.log(listFilms);
    return (
      <div>
        <Container className="AfficheFilm">
          <Row>
            {
              listFilms.results.map(item => (
                <Card className="CardFilm">
                  <Col className="photo-size">
                    <CardImg top width="100%" src={item.image_url} alt="Card image cap" />
                  </Col>
                  <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.on_theatre}</CardText>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>More info</Button>
                    </a>
                  </CardBody>
                </Card>
              ))
            }
          </Row>
        </Container>
      </div>
    );
  }
}

function mstp(state) {
  return {
    listFilms: state.listFilms,
  };
}
function mdtp(dispatch) {
  return bindActionCreators({
    dataResults,
  }, dispatch);
}

export default connect(mstp, mdtp)(AfficheFilm);
