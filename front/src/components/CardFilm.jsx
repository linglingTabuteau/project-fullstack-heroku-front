import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './CardFilm.scss';

const CardFilm = () => (
  <div>
    <Card className="CardFilm">
      <div className="photo-size">
        <CardImg top width="100%" src="/medias/kiki.jpg" alt="Card image cap" />
      </div>
      <CardBody>
        <CardTitle>kiki</CardTitle>
        <CardText>test</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  </div>
);

export default CardFilm;
