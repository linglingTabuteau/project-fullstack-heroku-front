import React, { Component } from 'react';
import {
  Container, Row, Button, Col,  Card, CardImg, CardBody, CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import AfficheFilm from '../containers/AfficheFilm';
import './Admin.scss';

class Admin extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <Container fluid className="Admin">
        <Row className="button">
          <Button tag={Link} to="/admin/addfilm">Add one Film</Button>
          <Button tag={Link} to="/admin/modifyfilm">Modify one Film</Button>
          {/* <Button tag={Link} to="/admin/addfilm">Delete one Film</Button> */}
        </Row>
        <div className="cards">
          <AfficheFilm />
          {/* <Row className="center-card">
            {
              listFilms.results.map(item => (
                <Card className="CardFilm">
                  <Col className="photo-size">
                    <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
                  </Col>
                  <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{onTheater}</CardText>
                    <Button tag={Link} to="/admin/modifyfilm">Modify one Film</Button>
                    <Button tag={Link} to="/admin/addfilm">Delete one Film</Button>
                  </CardBody>
                </Card>
              ))
            }
          </Row> */}
        </div>
      </Container>
    );
  }
}

const mstp = state => ({

});

const mdtp = dispatch => {

}

export default Admin;