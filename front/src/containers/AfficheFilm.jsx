import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container, Row, Card, CardImg, CardText, CardBody,
  CardTitle,
  Button,
} from 'reactstrap';
import '../components/CardFilm.scss';
import { dataResults } from '../actions/search';

class AfficheFilm extends Component {
  componentDidMount() {
    const { dataResults } = this.props;
    dataResults('http://localhost:5000/api/films');
  }

  render() {
    const { listFilms } = this.props;
    return (
      <div>
        <Container>
          <Row>
            {
              listFilms.results.map(item => (
                <Card className="CardFilm">
                  <div className="photo-size">
                    <CardImg top width="100%" src="/medias/kiki.jpg" alt="Card image cap" />
                  </div>
                  <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.on_theatre}</CardText>
                    <Button>More infor</Button>
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
