import React from 'react';
import './Footer.scss';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Container className="Footer" fluid>
    <Row className="block">
      <Col className="block" sm="4" lg="4">
        <h2>Services</h2>
        <ul>
          <li><Link to="/admin/addfilm">Modify film</Link></li>
          <li><Link to="/admin/addfilm">Contact Us</Link></li>
        </ul>
      </Col>
      <Col className="block" sm="4" lg="4">
        <h2>About</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signin">Se connecter</Link></li>
          <li><Link to="/signup">Create an account</Link></li>
        </ul>
      </Col>
      <Col className="block" sm="4" lg="4">
        <h2>Partners</h2>
        <ul>
          <Col>
            <a
              href="https://www.linkedin.com/in/lingling-tabuteau/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-3x fa-linkedin" />
            </a>
          </Col>
        </ul>
      </Col>
    </Row>
  </Container>
);

export default Footer;
