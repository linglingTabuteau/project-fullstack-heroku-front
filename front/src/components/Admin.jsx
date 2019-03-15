import React from 'react';
import {
  Container, Row, Button, Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Admin.scss';

const Admin =()=>{
  return (
    <Container fluid className="Admin">
      <Row className="button">
        <Button  tag={Link} to="/admin/addfilm">Add one Film</Button>
        <Button tag={Link} to="/admin/addfilm">Modify one Film</Button>
        <Button tag={Link} to="/admin/addfilm">Delete one Film</Button>
      </Row>
    </Container>
  );
}

export default Admin;